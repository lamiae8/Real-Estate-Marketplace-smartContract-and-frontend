import { Injectable } from '@angular/core';
import { Address } from 'cluster';
import { verify } from 'crypto';
import { data } from 'jquery';

import Web3 from "web3";
// @ts-ignore
import {abi} from '../../ABI.js';  //contract's abi (variables..) 




declare const window: any;

//contract's address
const address = '0x1911c19a61FbFd4dc65D58E1541150Cff305B1D7' 

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  public account: any = null;
  private Contract:any;
  public currentAddress:any;


  constructor() { }
  public Token = async () => {
    try {
            const contract = new window.web3.eth.Contract(
                abi,
                address,
            );
            const token = await contract.methods.Token().call();
            console.log("token",token)
            return token
        
    }
    catch (error : any) {
        const errorMessage = error.message;
        console.log(errorMessage)
   
    }
}


  private web3: any;
  
  private web3Provider:any;
  async loginmsk(){

    if (typeof window.ethereum !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
      this.web3 = new Web3(window.web3.currentProvider)
      console.log('MetaMask is installed!');
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            this.web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        this.web3.eth.sendTransaction({/* ... */});
          //getting the connected account
    }
    
    this.loadAccount()
    this.loadContract()
    window.sessionStorage.setItem("maskAccount", this.account); 
}

 //get the current account
 async loadAccount(){

  if(this.account==null){

    console.log("Account is null -- Fetching account")

    const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });

    this.account = accounts[0];

    //the address of the current user
    this.web3.eth.Contract.defaultAccount = this.account

    console.log(this.account)

  }
  

}
getAddress() {
  return this.account
}

//load the contract & to get its methods
async loadContract(){

  this.Contract=new this.web3.eth.Contract(abi,address,{gasPrice: '20000000', from: this.account})

  // this.transferEth("18")

}

 //add proprety to struct
 async addProduct(title:string,seller:string, etherValue:any){
 // this.loadContract()

  this.Contract.methods.addProduct(title,seller,etherValue)
  .send(
    {
      from: this.account,
      gas: '6721975',
     
    }
  )

  // .then(
  //   this.transferEth(etherValue)
  // )

  .then(console.log);
  
  this.buy(seller,etherValue);

}
//send ether
// using the evet emitter
 async buy(seller:string, etherValue:any){

  const conf= await this.web3.eth.sendTransaction({
     from: this.account,
     to: seller,
     value: Web3.utils.toWei(etherValue,"ether"),
   })
     .on('confirmation',
       function () { 
         console.log("ether transferé")
    
        }
     )
     .on('error', console.error); // If a out of gas error, the second parameter is the receipt.

  return conf

}


//get all products in the contract
async getAllTransactions(){

  const getAllProp=await this.Contract.methods.getAllProducts().call(
    {
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to: address // contract address 
    }
  )
  .then( (value: any) =>{window.sessionStorage.removeItem("transactions");  window.sessionStorage.setItem("transactions",JSON.stringify(value)); console.log(value)})
  // getAllProperties
  return getAllProp;
}
   


//get my transactions in the contract
async getMyTransactions(){
  
  const getProp= await this.Contract.methods.getMyTransactions().call(
    {
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to:address // contract address
    }
  )
  .then( ) 
 
  return getProp;
  
  // getMyProperties
}
   





 //get the balance of the current account
 async getCurrentAccountBalance(){
  return this.web3.eth.getBalance(this.account);
}
}
