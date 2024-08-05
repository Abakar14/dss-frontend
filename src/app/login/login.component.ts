import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bms-login',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(){
    
  }
  onSubmit() {
    // For now, we'll just log the form data to the console
    console.log('Form submitted');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
