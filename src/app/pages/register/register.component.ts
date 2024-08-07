import { Component } from '@angular/core';

@Component({
  selector: 'bms-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

  onRegister() {
    // For now, we'll just log the form data to the console
    console.log('Registration form submitted');
  }
}
