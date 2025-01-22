import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-display-image',
  standalone: true,
  imports: [],
  templateUrl: './display-image.component.html',
  styleUrl: './display-image.component.css'
})

export class DisplayImageComponent {

  datas!: string;
  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos() {
    this.service.getImages().subscribe(res => {
      this.datas = res.urls.regular;
    })
  }

  onClick() {
    this.getPhotos()
  }
}
