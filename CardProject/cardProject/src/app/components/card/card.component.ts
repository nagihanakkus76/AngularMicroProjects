import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() titleChild: string = '';
  @Input() imageUrlChild: string = '';
  @Input() usernameChild: string = '';
  @Input() contentChild: string = '';
}
