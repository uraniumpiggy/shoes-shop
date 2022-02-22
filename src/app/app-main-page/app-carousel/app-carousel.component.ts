import { Component, Input, OnInit } from '@angular/core';
import { cardItemData } from 'src/app/app-card-item/app-card-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss']
})
export class AppCarouselComponent implements OnInit {

  @Input() title: string = ''
  @Input() cardsData: cardItemData[] = [{img: '', brand: '', name: '', coloring: '', price: '', id: 0}]

  constructor() { }

  ngOnInit(): void {
  }

}
