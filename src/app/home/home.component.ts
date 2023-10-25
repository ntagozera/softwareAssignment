import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  password: string = ''
  constructor(private auth: AuthService){}
  email = localStorage.getItem('email');
  logout(){
    this.auth.logout();
    localStorage.clear()
  }
  
  
}
