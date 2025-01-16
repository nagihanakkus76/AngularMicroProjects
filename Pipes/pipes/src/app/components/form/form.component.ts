import { CommonModule } from '@angular/common';
import { Component, Input, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title: string = "";
  @Input() type: string = "";
  @Input() value: string = "";
  @Input() pipe?: PipeTransform;
  formatedValue: string = "";

  onValueChange(value: string) {
    this.value = value;
    this.formatedValue = this.pipe?.transform(this.value)
  }
}
