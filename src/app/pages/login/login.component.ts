import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'bms-login',
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit{
  [x: string]: any;

  loginForm: FormGroup;
  errorMessage: string | null = null;
  authService: AuthService = new AuthService;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log('Login form submitted', this.loginForm.value);
      if(this.authService.isLoggedIn()){
        location.href = '/dashboard';
          console.log('Login form submitted redirect');
      }
        
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
