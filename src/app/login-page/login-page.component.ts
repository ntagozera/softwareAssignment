import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  @ViewChild('f', { static: false })
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })
  //get email(){return this.loginForm.get('email')};

  constructor( private auth: AuthService) {}

  email: string = '';
  password: string = '';
  
  onSubmit(){}

  login(){
    if(this.email == '' && this.password == ''){
      alert('Please Fill the Form')
    }
    this.auth.login(this.email, this.password);
    console.log(this.email)
    localStorage.setItem('email',this.email)
    this.email = '';
    this.password = ''
  }
}

