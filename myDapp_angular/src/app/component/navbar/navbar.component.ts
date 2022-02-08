import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Web3Service } from '../../_services/web3.service';





@Component({
   selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.css']
 })
export class  NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;
  router: any;

  constructor(private tokenStorageService: TokenStorageService, private web3:Web3Service) { }

  openMetaMask(){
     
       this.web3.loginmsk().then(resp =>{
     console.log(resp);
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
     
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload()
    this.router.navigate(['/']);
    
  }
}