import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'bms-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
