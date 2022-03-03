import { Component, OnInit } from '@angular/core';
import { LanguagesService, PagesText } from '../services/languages.service';

@Component({
  selector: 'app-app-catalog-page',
  templateUrl: './app-catalog-page.component.html',
  styleUrls: ['./app-catalog-page.component.scss']
})
export class AppCatalogPageComponent implements OnInit {

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
  }

}
