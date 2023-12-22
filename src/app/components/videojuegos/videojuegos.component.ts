import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  listVideojuegos: any = []
  constructor(private _videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.getVideojuegos()
  }

  getVideojuegos()
  {
    this._videojuegosService.getVideojuegos().subscribe(res => {
      this.listVideojuegos = res;
      console.log(this.listVideojuegos)
    }, err => {
      console.log(err)
    })
  }
}
