import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';

import { CreateComponent } from './component/create/create.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ExploreComponent } from './component/explore/explore.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import {GAnnonceComponent} from './component/g-annonce/g-annonce.component';
import {TransationComponent} from './component/transation/transation.component';
import {TokenStorageGuard} from './_services/token-storage.guard'
import { RoleGuard } from './_services/role.guard';
import {ErrorGuard} from './_services/error.guard'


const routes: Routes = [
  //paths
  {path:'',component:HomeComponent},
  {path:'create',component:CreateComponent,canActivate:[TokenStorageGuard]},

  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'transactions',component:TransationComponent,canActivate:[RoleGuard]},
  {path:'explore',component:ExploreComponent},
  {path:'explore/product-details/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent,canActivate:[ErrorGuard]},
  {path:'register',component:RegisterComponent,canActivate:[ErrorGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[TokenStorageGuard]},
  {path:'gAnnonce',component:GAnnonceComponent,canActivate:[RoleGuard]},
  {path:'**',redirectTo:''}, //unvalid path
 
  
  

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }