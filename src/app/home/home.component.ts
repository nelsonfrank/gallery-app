import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pictures: Object;

  @Input() search: string;
  imageArray = [];

  gallery = [
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

  constructor(private _http: HttpService, private filter: AppComponent) {}

  ngOnInit() {
    this._http.getPicture().subscribe((data) => {
      this.pictures = data;
    });
    this.imageArray = this.gallery;
  }

  ngOnChanges() {
    this.searchFilterFunction(this.search);
  }
  searchFilterFunction = (text: string) => {
    const newData = this.gallery.filter((item) => {
      const textData = text.toUpperCase();
      let comparison = `${item.description.toUpperCase()}`;
      return comparison.indexOf(textData) > -1;
    });
    this.imageArray = newData;
  };
}
