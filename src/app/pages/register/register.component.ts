import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'bms-register',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

  onRegister() {
    // For now, we'll just log the form data to the console
    console.log('Registration form submitted');
  }
}
