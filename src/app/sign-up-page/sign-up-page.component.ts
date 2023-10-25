import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  registerArray : any = {};
  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

  email: string = '';
  password: string = '';
  confirmPassword: string =''

  register(){
    if(this.email == '' && this.password == '' && this.confirmPassword == ''){
      alert('Please Fill the Form')
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = ''
    this.confirmPassword = ''
  }
}
