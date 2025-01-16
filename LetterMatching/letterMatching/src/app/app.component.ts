import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  randomText: string = faker.lorem.sentence();
  enteredText: string = '';
  color: string = "incorrect";
  getInputValue(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
