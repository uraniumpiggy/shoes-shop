import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { Model, ModelsService } from '../services/models.service';

@Component({
  selector: 'app-app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.scss']
})
export class AppMainPageComponent implements OnInit {
  modelsDataNew: Model[] | undefined = undefined 
  modelsDataNike: Model[] | undefined = undefined 
  modelsDataYeezy: Model[] | undefined = undefined 
  modelsDataJordan: Model[] | undefined = undefined 


  constructor(private modelServise: ModelsService, public langs: LanguagesService) { 
    this.modelsDataNew = modelServise.getModels('', 8)
    this.modelsDataNike = modelServise.getModels('Nike', 8)
    this.modelsDataYeezy = modelServise.getModels('Yeezy', 8)
    this.modelsDataJordan = modelServise.getModels('Jordan 1', 8)
  
  }

  ngOnInit(): void {
  }

}
