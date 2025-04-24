import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private auth: AuthService) { }  
  
  logout() {
    console.log("navbar signout called");
    this.auth.logout()
  }

  get isAuthenticated(): boolean {
    //  console.log(this.auth.isAuthenticated());
    return this.auth.isAuthenticated();
    
  }
  
//   goToLogin(){
// this.router.navigate(['login']);
//   }
}
