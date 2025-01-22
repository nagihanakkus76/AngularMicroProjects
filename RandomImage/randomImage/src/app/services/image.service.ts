import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: string = "https://api.unsplash.com/"
  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get<ImageModel>(`${this.baseUrl}photos/random`,
      {
        headers: {
          Authorization: "Client-ID J906F81Sou0a6ArGApYsYAeg-L-GK0fwRJ2VCc_Kv-A"
        }
      }
    );
  }
}
