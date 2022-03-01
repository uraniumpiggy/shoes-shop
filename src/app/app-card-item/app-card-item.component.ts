import { Component, Input, OnInit } from '@angular/core';
import { Model, SizePrice } from '../services/models.service';

// export interface cardItemData {
//   img: string,
//   brand: string,
//   name: string,
//   coloring: string,
//   price: string,
//   id: number
// }

@Component({
  selector: 'app-app-card-item',
  templateUrl: './app-card-item.component.html',
  styleUrls: ['./app-card-item.component.scss']
})
export class AppCardItemComponent implements OnInit {

  @Input() cardData: Model = {
    imgs: ['assets/img01.jpg'], 
    brand: 'Nike', 
    model: 'Dunk Low Retro 2021', 
    colors: "'White Black'", 
    id: 1,
    releaseDate: '11/02/2022',
    sizePrice: {"US 10": '19 256'}
  }
  price: string | undefined = ''


  constructor() { }

  ngOnInit(): void {
    this.price = this.cardData.sizePrice[Object.keys(this.cardData.sizePrice)[0] as keyof SizePrice]
  }

}
