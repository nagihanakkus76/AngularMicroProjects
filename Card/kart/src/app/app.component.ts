import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: '@cbdag',
      content: 'Çok Hızlı Sürdüm'
    },
    {
      title: 'Dağ Tırmanışı',
      imageUrl: 'assets/mountain.jpeg',
      username: '@cbuludag',
      content: 'Bugünde İyi Tırmandım'
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: '@cbdoga',
      content: 'Hadi Biraz Maçka Parkında Turlayalım'
    }
  ]
}
