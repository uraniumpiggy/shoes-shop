import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService, PagesText } from '../services/languages.service';

@Component({
  selector: 'app-app-catalog-page',
  templateUrl: './app-catalog-page.component.html',
  styleUrls: ['./app-catalog-page.component.scss']
})
export class AppCatalogPageComponent implements OnInit {

  constructor(public langs: LanguagesService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/catalog/shoes');
  }

}
