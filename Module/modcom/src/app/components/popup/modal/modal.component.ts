import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private element: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    //modal ı body nin bir parçası haline getirdi. ElementRef doğrudan html e erişim sağlayan bir türüdr.navive element ise html temsilcisidir diyebiliriz.
    if (isPlatformBrowser(this.platformId)) {
      document.body.appendChild(this.element.nativeElement)
    }
  }

  //Farklı bir root a gidildğinde tetiklenen fonksiyondur.ngOnInit de bodye eklediğimiz modal burada body den kaldırıldı.
  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
