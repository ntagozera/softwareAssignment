import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( res =>{
      localStorage.setItem('token','true');
      

      if(res.user?.emailVerified == true){
        this.router.navigate(['home'])

      }else{
        this.router.navigate(['/verify-email'])
      }

    }, err => {
      alert("Incorrect Authantication.");
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res => {
      alert("Registration Successful");
      this.router.navigate(['/login'])
      this.sendEmailForVarification(res.user)

    }, err => {
      alert(err.message);
      this.router.navigate(['/signUp'])
    })
  }

  logout(){
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  resetPassword(email: string){
    this.fireAuth.sendPasswordResetEmail(email).then( ()=> {
      this.router.navigate(['/verify-email'])
    }, err => {
      alert('Something went wrong!')
    })
  }

  sendEmailForVarification(user : any) {
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong.')
    })
  }

}
