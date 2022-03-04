import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-faq-contacts',
  templateUrl: './faq-contacts.component.html',
  styleUrls: ['./faq-contacts.component.scss']
})
export class FaqContactsComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
