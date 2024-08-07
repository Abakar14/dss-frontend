import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'bms-login',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit{

isLoginView: boolean = false;
  userObj: any = {
    userName: "",
    password: ""
  }



  email!: string;
  password!: string;

  loginForm = new FormGroup({
      email: new FormControl("email",  Validators.required),

      password: new FormControl("password", Validators.required),
    });
  

  //BrowserModule, ReactiveFormsModule, AppRoutingModule

  constructor(){ }

  getEmail(){
    return this.loginForm.get('email');
  }

  getPassword(){
    return this.loginForm.get('password');
  }


  onSubmit() {
    if(this.loginForm.valid){
      console.log("Form sumitted", this.loginForm.value);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
