import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from '../services/languages.service';
import { Model, ModelsService, SizePrice } from '../services/models.service';

@Component({
  selector: 'app-model',
  templateUrl: './app-model.component.html',
  styleUrls: ['./app-model.component.scss']
})
export class AppModelComponent implements OnInit {

  modelData: Model | undefined = undefined
  youMayBeInterestedData: Model[] = []
  price: string | undefined = undefined

  isAlertOpen: boolean = false
  isSizesOpen: boolean = false
  arrayIndex: number = 0

  constructor(private modelsService: ModelsService, private router: Router, public langs: LanguagesService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const url: string = this.router.url
    const id: number = parseInt(url.substr(url.lastIndexOf('/')+1)) 
    this.modelData = this.modelsService.getModelById(id)
    if (this.modelData !== undefined) {
      this.youMayBeInterestedData = this.modelsService.getModels(this.modelData.brand, 8)
      for (let key in this.modelData.sizePrice) {
        this.price = this.modelData?.sizePrice[key as keyof SizePrice]
        break
      }
    }
  }

  openSizesAlert() {
    this.isAlertOpen = true
    this.isSizesOpen = true
  }

  openAlertWindow(index: number) {
      this.arrayIndex = index
      this.isAlertOpen = true
  }

  closeAlertWindow(close: boolean) {
     this.isAlertOpen = close
     this.isSizesOpen = false 
  }

}
