import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
  selector: 'bms-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'dss-frontend root';
  
}
