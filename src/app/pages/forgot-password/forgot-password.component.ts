import { Component } from '@angular/core';

@Component({
  selector: 'bms-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.sass'
})
export class ForgotPasswordComponent {
  onForgotPassword() {
    // For now, we'll just log the form data to the console
    console.log('Forgot password form submitted');
  }

}
