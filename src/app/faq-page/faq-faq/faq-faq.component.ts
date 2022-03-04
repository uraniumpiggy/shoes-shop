import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-faq',
  templateUrl: './faq-faq.component.html',
  styleUrls: ['./faq-faq.component.scss']
})
export class FaqFaqComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
