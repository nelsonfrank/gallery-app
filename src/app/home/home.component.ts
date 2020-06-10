import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pictures: Object;

  gallery: Object = [
    {
      image: './assets/img/car.jpg',
      description: 'car',
    },
    {
      image: './assets/img/house.jpg',
      description: 'house',
    },
    {
      image: './assets/img/motocycle.jpg',
      description: 'motocycle',
    },
    {
      image: './assets/img/sniker.jpg',
      description: 'sniker',
    },
    {
      image: './assets/img/table.jpeg',
      description: 'table',
    },
    {
      image: './assets/img/headphone.jpeg',
      description: 'headphone',
    },
    {
      image: './assets/img/bicycle.jpg',
      description: 'bicycle',
    },
  ];

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getPicture().subscribe((data) => {
      this.pictures = data;
    });
  }
}
