import { Component, OnInit } from '@angular/core';
import { ProductService,Category } from 'src/app/_services/product.service';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Web3Service } from 'src/app/_services/web3.service';
import { AngularFireStorage , AngularFireUploadTask } from '@angular/fire/compat/storage';
import { url } from 'inspector';
import { AngularFireList } from '@angular/fire/compat/database';
import { getStorage, ref } from "firebase/storage";
import { data } from 'jquery';
import { read } from 'fs';









@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  

  form: any = {
   file:null,
    label: null,
    title :null,
    category:{ id : null },
    location :null,
    price :null,
    surface :null,
    discription :null,
   
    
    
  

   
  
  
  };

  isSuccessful = false;
  errorMessage = '';
  cats!: Category[];
  img0!:any;
  img1!:any;
  img2!:any;
  img3!:any;
  sellerAd!:any;
 
  



  constructor(private productservice: ProductService,private router: Router,private web3: Web3Service,private fireStorage: AngularFireStorage,private tokenserv: TokenStorageService) { }

  ngOnInit(): void {
   // console.log(this.fileUpload.url);
   this.web3.loginmsk()
    console.log(this.web3.account)
    this.getCategories()
 
   
  }
 getCategories(){
   this.productservice.getCategory().subscribe(data=>{this.cats=data;console.log(data)})
  console.log(this.cats)
  
}
changeCat(event:any){

    this.form.category.id=event.target.value.substr(3);
    console.log(event.target.value.substr(3))

}

  onSubmit(): void { 

    const {label,title,category,location,price,surface,discription} = this.form;
    this.img0=window.sessionStorage.getItem("img0");
    this.img1=window.sessionStorage.getItem("imgl");
    this.img2=window.sessionStorage.getItem("img2");
    this.img3=window.sessionStorage.getItem("img3");

  

    
    console.log(this.form);
 
   
   this.sellerAd=this.web3.account;
   console.log(this.sellerAd)
  /*  if(this.sellerAd==null){
      alert("you should connect to MetaMAsk");
      this.web3.loginmsk();
    }*/
  //else{

    this.productservice.create(label,title,location,price,surface,discription,false,false,category,[this.img0,window.sessionStorage.getItem("img1"),this.img2,this.img3],this.sellerAd).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        alert("product added succesfully, the admin will verify it soon,thank you!")

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSuccessful= false;
      }
    }); 
    
    
   // this.router.navigate(['/profile']);
  //}

}

  
 


//images upload
F!:string;
listF!:any[];

imagenes: any[] = [];

cargarImagen(event: any) {
  let archivos = event.target.files;
  let nombre = "product";

  for (let i = 0; i < archivos.length; i++) {

    let reader = new FileReader();
    reader.readAsDataURL(archivos[i]);
    reader.onloadend = () => {
      console.log(reader.result);
      this.imagenes.push(reader.result);
     
      
      

      this.productservice.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen => { 
        if(urlImagen){
        
      
        
        window.sessionStorage.setItem("img"+i,urlImagen)
      
      }}
      
      
      
      
      );
    
 
    } 
 
  } 

 



}





}
