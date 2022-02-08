import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() id!:string;
  @Input() label!:string;
  @Input() title!:string;
  @Input() location!:string;
  @Input() category!:any;
  @Input() surface!:any;
  @Input() price!:any;
  @Input() discription!:Text;
  @Input() solde!:boolean;
  @Input() userId!:string;
  @Input() userName!:string;
  @Input() sellerAddress!:string;
  @Input() images!:string;



  constructor() { }

  ngOnInit(): void {
  }


}
