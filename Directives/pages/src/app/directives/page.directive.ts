
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPage]',
  standalone: true
})
export class PageDirective {

  constructor(private element: ElementRef) {
  };

  @Input() set color(color: string) {
    this.element.nativeElement.style.color = color;
  }

}
