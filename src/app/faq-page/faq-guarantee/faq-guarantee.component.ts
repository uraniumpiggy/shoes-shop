import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-guarantee',
  templateUrl: './faq-guarantee.component.html',
  styleUrls: ['./faq-guarantee.component.scss']
})
export class FaqGuaranteeComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
