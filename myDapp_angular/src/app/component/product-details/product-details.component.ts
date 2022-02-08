import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService,Product} from '../../_services/product.service';
import { Web3Service } from 'src/app/_services/web3.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
 isSuccessful = false;
  errorMessage = '';
prod!:Product;
  constructor(private web3: Web3Service, private router:Router,private route:ActivatedRoute,private prodService: ProductService) { }

  ngOnInit(): void {
   this.getProduct(this.route.snapshot.params["id"]); //get product
    console.log(this.route.snapshot.params["id"]);
   

   
  }

getProduct(_id: string){
  this.prodService.getProduct(this.route.snapshot.params["id"]).subscribe(data=>{this.prod=data; console.log(this.prod);});
  
  
}

conf!:any;
    async onSubmit() { 
       
      this.web3.loginmsk()
      console.log(this.prod.sellerAddress)
    this.conf= await this.web3.addProduct(this.prod.title,this.prod.sellerAddress,String(this.prod.price))
    
     this.prodService.solde(this.prod.id).subscribe(data=>{console.log(data); window.location.reload()}); 
  
  
  
      
  //after 5s change solde
    

   console.log(this.prod.solde);
   window.location.reload()
   
 // await
 
    }


    }




