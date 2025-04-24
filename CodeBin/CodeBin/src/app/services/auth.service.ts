import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private uid?:string

  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        this.uid = user.uid;
        console.log('user login', this.uid);
        console.log(user.email);
        
        // ...
      } else {
        this.uid = undefined;
        console.log('user logout', this.uid);
        // User is signed out
        // ...
      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUid() {
    return this.uid;
  }

  registerUser(email: any, password: any) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Register user -----> ', user);
        this.router.navigate(['/login']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errorCode -----> ', errorCode);
        console.log('errorMessage -----> ', errorMessage);
        alert('something went wrong while singup please try again!');

        // ..
      });
  }

  loginUser(email: any, password: any) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('login user -----> ', user);
        this.router.navigate(['/']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errorCode -----> ', errorCode);
        console.log('errorMessage -----> ', errorMessage);
        alert('something went wrong while login please try again!');
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['/login']);
    })
      .catch((error) => {
        alert('something went wrong while logout please try again!');
      });
  }

}
