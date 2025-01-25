import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/camping.jpg',
      username: 'cbdag',
      content: 'Kampa gençler'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/paragliding.jpg',
      username: 'cbuludag',
      content: 'Bugünde iyi tırmandım'
    },
    {
      title: 'Surf',
      imageUrl: 'assets/surf.jpg',
      username: 'cbdoga',
      content: 'Hadi biraz surf yapalım'
    }
  ];
}
