import { Component } from '@angular/core';
import { DisplayImageComponent } from "./components/display-image/display-image.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DisplayImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomImage';
}
