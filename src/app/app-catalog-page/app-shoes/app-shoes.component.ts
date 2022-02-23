import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shoes',
  templateUrl: './app-shoes.component.html',
  styleUrls: ['./app-shoes.component.scss']
})
export class AppShoesComponent implements OnInit {

  items: number[] = [1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1]
  isInStock: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
