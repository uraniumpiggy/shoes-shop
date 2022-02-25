import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-info-link',
  templateUrl: './app-model-info-link.component.html',
  styleUrls: ['./app-model-info-link.component.scss']
})
export class AppModelInfoLinkComponent implements OnInit {

  @Input() title: string = ''
  @Input() img: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
