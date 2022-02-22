import { Component, Input, OnInit } from '@angular/core';

export interface cardItemData {
  img: string,
  brand: string,
  name: string,
  coloring: string,
  price: string,
  id: number
}

@Component({
  selector: 'app-app-card-item',
  templateUrl: './app-card-item.component.html',
  styleUrls: ['./app-card-item.component.scss']
})
export class AppCardItemComponent implements OnInit {

  @Input() cardData: cardItemData = {
    img: 'https://api.outofstock.cc/media/img01_6.jpg', 
    brand: 'Nike', 
    name: 'Dunk Low Retro 2021', 
    coloring: "'White Black'", 
    price: '19 286 ₽', 
    id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
