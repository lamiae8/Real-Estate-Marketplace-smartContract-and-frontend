import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { transaction } from 'src/app/models/Transaction';
import { Web3Service } from 'src/app/_services/web3.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent implements OnInit {

  allTransactions!:transaction[];
  trans!:[] | null;
  constructor(private web3: Web3Service) {

   }

  ngOnInit(): void {
    
    this.web3.loginmsk()
    this.gettr()
  this.getAll();
  console.log(this.getAll())
    //console.log(this.web3.getAllTransactions())
    // this.allTransactions=this.getAll();

   
}

gettr(){
  this.web3.getAllTransactions().then(data=>{this.allTransactions=data;console.log(data)})

 
}


async getAll(){
  this.allTransactions=await this.web3.getAllTransactions();

 this.trans=JSON.parse(sessionStorage.getItem("transactions") +'');
  console.log(this.trans)
  for( let i in this.trans){
    console.log(i)
    console.log(i[1])
    console.log(i[2])
  }
  return this.trans
 }




 
}
