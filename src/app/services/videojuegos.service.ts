import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  url = "http://localhost:8080/videojuegos"
  constructor(private _http: HttpClient) { }

  getVideojuegos()
  {
    return this._http.get(this.url);
  }
}
