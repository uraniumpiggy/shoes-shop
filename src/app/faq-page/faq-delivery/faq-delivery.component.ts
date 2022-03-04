import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-delivery',
  templateUrl: './faq-delivery.component.html',
  styleUrls: ['./faq-delivery.component.scss']
})
export class FaqDeliveryComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
