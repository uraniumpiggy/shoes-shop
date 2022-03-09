import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-payment',
  templateUrl: './faq-payment.component.html',
  styleUrls: ['./faq-payment.component.scss']
})
export class FaqPaymentComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
