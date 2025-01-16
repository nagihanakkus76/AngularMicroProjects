import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ConvertComponent } from './components/convert/convert.component';
import { ConvertPipe } from './pipes/convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormComponent, ConvertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formattedValue?: string;
  name: string = "";
  titleCasePipe?: TitleCasePipe;
  datePipe?: DatePipe
  currencyPipe?: CurrencyPipe
  convertPipe?: ConvertPipe

  constructor() {
    this.titleCasePipe = new TitleCasePipe();
    this.datePipe = new DatePipe('tr', 'MMMM d, y');
    this.currencyPipe = new CurrencyPipe('tr', 'TRY');
    this.convertPipe = new ConvertPipe();
  }
}
