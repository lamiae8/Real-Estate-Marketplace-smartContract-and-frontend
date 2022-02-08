import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from './token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class ErrorGuard implements CanActivate {
  constructor(private tokenService:TokenStorageService,private router: Router){}
  canActivate() {

    if(this.tokenService.isloggedin()==false){
      return true;
        }
        alert("You are logged In,You can logOut to Register again ")
        this.router.navigate(['/']);
         return false;
    
  }
  
}
