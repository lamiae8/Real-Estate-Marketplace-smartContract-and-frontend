import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { report } from 'process';
import {ProductService,Product} from '../../_services/product.service'

@Component({
  selector: 'app-g-annonce',
  templateUrl: './g-annonce.component.html',
  styleUrls: ['./g-annonce.component.css']
})


export class GAnnonceComponent implements OnInit {
isSuccessful = false;
errorMessage = '';
prods!:Product[];
newReq!:Product[];
req!:Product[];
req1!:Product[];

  constructor(private prodService :ProductService) { }

  ngOnInit(): void {
    this.getAllRequests();
    console.log(this.newestRequests())
  }

  getAllRequests(){
    this.prodService.getProducts().subscribe(data=>{this.prods=data.reverse()});
    for(let p of this.prods ){
      if(p.solde==false) this.req.push(p);
    }
    return this.req;
  }
newestRequests(){
  this.prodService.getProducts().subscribe(data=>{this.req1=data.slice(-6).reverse()});
  for(let p of this.req1 ){
    if(p.solde==false) this.newReq.push(p);
  }
  return this.newReq;

}

  verify(id:string) {
  
   
    console.log(id);
   this.prodService.verify(id).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
     
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSuccessful= false;
    }
  });
    
    window.location.reload();

}

reject(id:string){
  this.prodService.reject(id).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
     
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSuccessful= false;
    }
  });
  window.location.reload();
}

}
