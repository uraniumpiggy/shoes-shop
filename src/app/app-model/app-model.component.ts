import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model, ModelsService } from '../services/models.service';

interface alertText {
  title: string,
  text: string,
}

@Component({
  selector: 'app-model',
  templateUrl: './app-model.component.html',
  styleUrls: ['./app-model.component.scss']
})
export class AppModelComponent implements OnInit {

  modelData: Model | undefined = undefined
  youMayBeInterestedData: Model[] = []

  isAlertOpen: boolean = false
  arrayIndex: number = 0

  constructor(private modelsService: ModelsService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const url: string = this.router.url
    const id: number = parseInt(url.substr(url.lastIndexOf('/')+1)) 
    this.modelData = this.modelsService.getModelById(id)
    if (this.modelData !== undefined) {
      this.youMayBeInterestedData = this.modelsService.getModels(this.modelData.brand, 8)
    }
  }

  openAlertWindow(index: number) {
      this.arrayIndex = index
      this.isAlertOpen = true
  }

  closeAlertWindow(close: boolean) {
     this.isAlertOpen = close 
  }

}
