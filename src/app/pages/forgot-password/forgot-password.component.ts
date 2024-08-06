import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'bms-forgot-password',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.sass'
})
export class ForgotPasswordComponent {
  onForgotPassword() {
    // For now, we'll just log the form data to the console
    console.log('Forgot password form submitted');
  }

}
