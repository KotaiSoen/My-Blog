import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  admin = '';

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onLogin() {
    const {email, password} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(
      () => {
        if(this.admin === 'soenkotai2000@gmail.com') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);
        }
      });
  }
}
