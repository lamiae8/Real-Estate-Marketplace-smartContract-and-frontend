import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase 
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NewItemsComponent } from './component/new-items/new-items.component';
import { BannerAreaComponent } from './component/banner-area/banner-area.component';
import { ProductAreaComponent } from './component/product-area/product-area.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateComponent } from './component/create/create.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ExploreComponent } from './component/explore/explore.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';



import { ProfileComponent } from './component/profile/profile.component';
import {AuthInterceptor} from "./_helpers/auth.interceptor"
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GAnnonceComponent } from './component/g-annonce/g-annonce.component';
import { RequestComponent } from './component/request/request.component';
import { TransationComponent } from './component/transation/transation.component';
import { CategoryComponent } from './component/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewItemsComponent,
    BannerAreaComponent,
    ProductAreaComponent,
    ProductComponent,
    FooterComponent,
    CreateComponent,
    HomeComponent,
    ProductDetailsComponent,
    ExploreComponent,
    LoginComponent,
    RegisterComponent,


    ProfileComponent,
      GAnnonceComponent,
      RequestComponent,
      TransationComponent,
      CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
   
 

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
