import { Component,  OnInit } from '@angular/core';

import { ProductService, Product } from 'src/app/_services/product.service';
@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent implements OnInit {
  
  newProducts!: Product[];
  
  constructor(private prodService: ProductService) { }
  
  getProducts(){
    this.prodService.getProducts().subscribe(data=>{this.newProducts=data.slice(-3).reverse()})
    
    console.log(this.newProducts)
  }
  

  ngOnInit(): void {
    this.getProducts()
  }

}
