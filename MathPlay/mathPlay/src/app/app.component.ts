import { Component } from '@angular/core';
import { EqualityComponent } from "./components/equality/equality.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EqualityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mathPlay';
}
