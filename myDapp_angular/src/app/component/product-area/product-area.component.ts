import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ProductService, Product } from 'src/app/_services/product.service';
@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {

  constructor(private prodService : ProductService) { }
  trendingProducts!: Product[];
  getProducts(){
    this.prodService.getProducts().subscribe(data=>{this.trendingProducts=data.sort(() => 0.5 - Math.random()).slice(0, 6)})
  
    console.log(this.trendingProducts)
    
    

  }
  

  ngOnInit(): void {
    this.getProducts()
  }


}
