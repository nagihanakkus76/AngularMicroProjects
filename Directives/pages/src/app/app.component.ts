import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageDirective } from './directives/page.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentPage: number = 0;

  images = [
    {
      title: 'Deniz Kum Güneş',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Belgrad Ormanı',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Maslak',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Uludağ',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Doğa',
      url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fHww'
    },
    {
      title: 'İstanbul',
      url: 'https://plus.unsplash.com/premium_photo-1661962550248-59cf249e078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlzdGFuYnVsfGVufDB8fDB8fHww'
    },
    {
      title: 'Galata Kulesi',
      url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Ayasofya Camii',
      url: 'https://images.unsplash.com/photo-1655832975302-8008689dd188?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXlhc29meWF8ZW58MHx8MHx8fDA%3D'
    }
  ]

  pageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 4
  }

  // Sayfa geçişleri metotlada yapılabilir(2.yöntem)
  // changePages(index:number) {
  //   this.currentPage = index;
  //   }
}
