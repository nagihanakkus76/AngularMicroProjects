import { Component, Input, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  @Input() title:string ="";
  @Input() toTitle:string ="";
  @Input() type:string ="";
  @Input() value:string ="";
  @Input() pipe?:PipeTransform;
  formatedValue:string = "";

  onValueChange(value: string) {
    this.value = value;
    this.formatedValue = this.pipe?.transform(this.value,"km")
    }
}
