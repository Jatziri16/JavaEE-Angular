import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  constructor(private _videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.getVideojuegos()
  }

  getVideojuegos()
  {
    this._videojuegosService.getVideojuegos().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
}
