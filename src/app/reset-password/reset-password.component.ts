import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  email: string = ''

  constructor( private auth: AuthService){}

  resetPassword(){
    this.auth.resetPassword(this.email);
    this.email = '';
  }
}
