import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  buttonActive: boolean[] = [false, false, false, false, false]

  constructor(private route: Router, public langs: LanguagesService) {  }

  changeLink(index: number) {
    this.buttonActive = [false, false, false, false, false]
    this.buttonActive[index] = true
  }

  selectChangeHandler(event: any) {
    const url: string = event.target.value

    this.buttonActive = [false, false, false, false, false]

    if (url === '/faq/contacts') {
      this.buttonActive[0] = true
    } else if (url === '/faq/delivery') {
      this.buttonActive[1] = true
    } else if (url === '/faq/answers') {
      this.buttonActive[2] = true
    } else if (url === '/faq/guarantee') {
      this.buttonActive[3] = true
    } else if (url === '/faq/documents') {
      this.buttonActive[4] = true
    } else {
      console.log("Url error in faqPageComponent")
    }

    this.route.navigate([url])
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
