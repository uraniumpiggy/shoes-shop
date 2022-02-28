import { Component, OnInit } from '@angular/core';
import { Model, ModelsService } from '../services/models.service';

@Component({
  selector: 'app-app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.scss']
})
export class AppMainPageComponent implements OnInit {
  modelsData: Model[] | undefined = undefined 

  constructor(private modelServise: ModelsService) { 
    this.modelsData = modelServise.models
  }

  ngOnInit(): void {
  }

}
