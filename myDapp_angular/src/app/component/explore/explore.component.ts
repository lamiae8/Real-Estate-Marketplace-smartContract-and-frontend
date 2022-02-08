import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ProductService,Product} from 'src/app/_services/product.service';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  products!: Product[];
  prods!:Product[];
  Sprods!:Product[];

 
  constructor(
    private prodService: ProductService 
  ) { }
getProducts(){
  this.prodService.getProducts().subscribe(data=>{this.products=data; console.log(data);
   
  
  
  });
 
  console.log(this.products)
 
  
}

verifiedProd(){
  this.prodService.isVerified().subscribe(data=>{this.prods=data; console.log(data);
   
  
  
  });
 
  console.log(this.prods)
 
  
}
SoldProd(){
  this.prodService.isSold().subscribe(data=>{this.Sprods=data; console.log(data);
  
  });
 
  console.log(this.Sprods)
 
  
}
  ngOnInit(): void {
   
    this.getProducts()
    this.verifiedProd()
    this.SoldProd()
    
  }

  isShow = false;
  isShow1 = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  toggleDisplay1() {
    this.isShow = !this.isShow1;
    
  }
}
