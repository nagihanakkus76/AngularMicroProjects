import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password: string = "";
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  modifySymbols() { this.includeSymbols = !this.includeSymbols; }

  modifyNumbers() { this.includeNumbers = !this.includeNumbers; }

  modifyLetters() { this.includeLetters = !this.includeLetters; }

  buttonClick() {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwyz';
    const symbols: string = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) validChars += letters;

    if (this.includeNumbers) validChars += numbers;

    if (this.includeSymbols) validChars += symbols;

    let generatedPassword: string = "";

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
