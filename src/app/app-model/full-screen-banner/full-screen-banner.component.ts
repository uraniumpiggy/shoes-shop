import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-full-screen-banner',
  templateUrl: './full-screen-banner.component.html',
  styleUrls: ['./full-screen-banner.component.scss']
})
export class FullScreenBannerComponent implements OnInit {

  @Output() onClose: EventEmitter<boolean> = new EventEmitter()

  @Input() text: string = ''
  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.onClose.emit(false)
  }

}
