import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-documents',
  templateUrl: './faq-documents.component.html',
  styleUrls: ['./faq-documents.component.scss']
})
export class FaqDocumentsComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

  showLicense() {
    window.open('./assets/license.pdf')
  }

  showAgent() {
    window.open('./assets/Agent.pdf')
  }

  showRules() {
    window.open('./assets/Rules.pdf')
  }

  showPolitics() {
    window.open('./assets/Politics.pdf')
  }

}
