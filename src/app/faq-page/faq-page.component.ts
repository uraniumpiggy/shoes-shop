import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  buttonActive: boolean[] = [false, false, false, false, false]

  constructor(private route: Router) {  }

  changeLink(index: number) {
    this.buttonActive = [false, false, false, false, false]
    this.buttonActive[index] = true
  }

  ngOnInit(): void {
    this.buttonActive = [false, false, false, false, false]
    if (this.route.url === '/faq/contacts') {
      this.buttonActive[0] = true
    } else if (this.route.url === '/faq/delivery') {
      this.buttonActive[1] = true
    } else if (this.route.url === '/faq/answers') {
      this.buttonActive[2] = true
    } else if (this.route.url === '/faq/guarantee') {
      this.buttonActive[3] = true
    } else if (this.route.url === '/faq/documents') {
      this.buttonActive[4] = true
    } else {
      console.log("Url error in faqPageComponent")
    }
  }

}
