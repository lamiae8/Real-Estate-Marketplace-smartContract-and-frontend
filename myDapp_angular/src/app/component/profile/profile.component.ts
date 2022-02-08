import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import {ProductService,Product} from '../../_services/product.service';
import { Web3Service } from 'src/app/_services/web3.service';
import { transaction } from 'src/app/models/Transaction';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentAddress!:string;

  myProducts!: Product[];
  mySoldProducts!: Product[];
  mySaleProducts!: Product[];
  myTransactions!:transaction[];
  allTransactions!:transaction[];

  constructor(private token: TokenStorageService, private prodService: ProductService ,private web3: Web3Service) { }

  getMyProducts(){
    this.prodService.getMyProducts().subscribe(data=>{this.myProducts=data})
    console.log(this.myProducts)
  
    
  }
  getMySoldProd(){
    for(var p of this.myProducts)
    if(p.solde){
this.mySoldProducts.push(p)

    }
    return this.mySoldProducts
  }
  forSaleProd(){
    console.log("sale")
    for(var p of this.myProducts)
    if(!p.solde){
      console.log(this.mySaleProducts)
//this.mySaleProducts.push(p)

    }

    return this.mySaleProducts

  }

  async getMyTransactions(){
   
    this.myTransactions=await this.web3.getMyTransactions();
    this.currentAddress=this.web3.getAddress()
    console.log(this.myTransactions)
    console.log('-----------------------------------------------')
    console.log(this.currentAddress);
    // return this.myTransactions;
    
 }
 async getAll(){
  this.allTransactions=await this.web3.getAllTransactions();
 }
  ngOnInit(): void {
    this.web3.loginmsk();
   // console.log(this.web3.getAllTransactions())
    this.currentUser = this.token.getUser();
     console.log(this.currentUser.id);
     
    this.currentAddress=this.web3.getAddress()
    console.log('-----------------------------------------------')
    console.log(this.currentAddress);
   
   
  
  
    this.getMyProducts()
    this.forSaleProd()  //pas encore vendus
    console.log(this.mySaleProducts)
    this.getMySoldProd()  //vendus
    this.getAll()
   
  }
}