import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//firebase
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
//spanish
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


import{TokenStorageService} from "src/app/_services/token-storage.service"
import { stringify } from 'querystring';
import { list } from 'firebase/storage';



const PRODUCT_API = 'http://localhost:9191/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Product {
 

  constructor(
    public  id: string,
    public  label: string,
    public  title: string,
    public  location: string,
    public  surface: any,
    public  price: any,
    public  discription: Text,
    public  solde: boolean,
    public verified : boolean,
    public  category: any,
    public  userId: string,
    public userName:string,
    public images:string[],
    public sellerAddress:string,

   ) {
  }
}
export class Category{
  constructor(
    public id:string,
    public label:string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private basePath = '/uploads';
 
  constructor(private http: HttpClient, private db: AngularFireDatabase, private storage: AngularFireStorage,private tokenserv: TokenStorageService) { }
  


  create(label: string, title: string, location: string,surface: any, price: any,discription: Text,solde: boolean,verified:boolean,category: any,images:string[],sellerAddress:string): Observable<any> {
   
    return this.http.post(PRODUCT_API + '/create', {
      label,
      title,
      location,
      surface,
      price,
      discription,
      solde,
      verified,
      category,
      images,
      sellerAddress
    }, httpOptions);
  }
verify(idP:string){
  console.log(idP)
  return this.http.post(PRODUCT_API+'/verify/'+idP,httpOptions);
  
}

reject(idP:string){
  console.log(idP)
  return this.http.post(PRODUCT_API+'/delete/'+idP,httpOptions);
}

solde(id:string){
  console.log(id)
  return this.http.post(PRODUCT_API+'/solde/'+id,httpOptions);
}
  getProducts(){    
   
    return this.http.get<Product[]>(PRODUCT_API+'/allProducts');
    
}
getMyProducts(){
  
  return this.http.get<Product[]>(PRODUCT_API+'/user-products');
  
}

getProduct(idPr:string){
  return this.http.get<Product>(PRODUCT_API+'/getProduct/'+idPr);
}
isVerified(){
  return this.http.get<Product[]>(PRODUCT_API+'/isVerified');
}
isSold(){
  return this.http.get<Product[]>(PRODUCT_API+'/isSold');
}
getCategory(){
  console.log("in service")
  return this.http.get<Category[]>(PRODUCT_API+'/category/getAll');
}




//images storage in firebase

storareRef = firebase.app().storage().ref();



 


  async subirImagen(nombre: string, imgBase64: any) {

    try {
      let respuesta = await this.storareRef.child("productImages/" + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
       
      return await respuesta.ref.getDownloadURL();
     
    } catch (err) {
      console.log(err);
      return null;
    }

  }
}
