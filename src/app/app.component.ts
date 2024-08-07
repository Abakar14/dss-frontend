import { Component  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bms-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'dss-frontend root';
  
}
