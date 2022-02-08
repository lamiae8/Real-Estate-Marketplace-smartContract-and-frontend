import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from './token-storage.service'
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router,private tokenService:TokenStorageService){}
  canActivate() {
   // let role = localStorage.getItem("userRole")
  let role=this.tokenService.getUser();
  console.log(role.roles)
    if(role.roles=='ROLE_ADMIN'){
    return true;
  }

  alert("you don't have admin rights");
  this.router.navigate(['/']);
  return false;
}
  
}
