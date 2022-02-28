import { Component, Input, OnInit } from '@angular/core';
import { Model, ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss']
})
export class AppCarouselComponent implements OnInit {

  @Input() title: string = ''
  @Input() cardsData: Model[] | undefined  = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
