import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';
import { Model, ModelsService, SizePrice } from 'src/app/services/models.service';

export interface filterSettings {
  text: string,
  sizes: string[]
}

@Component({
  selector: 'app-app-shoes',
  templateUrl: './app-shoes.component.html',
  styleUrls: ['./app-shoes.component.scss']
})
export class AppShoesComponent implements OnInit {

  items: Model[] = []
  isInStock: boolean = false

  isMobileFiltersVisible: boolean = false

  constructor(private modelsService: ModelsService, public langs: LanguagesService) { }

  ngOnInit(): void {
    this.items = this.modelsService.models
  }


  upadateGrid(filterData: filterSettings) {
    let newItems: Model[] = []
    if (filterData.text === '') {
      newItems = this.modelsService.models
    } else {
      newItems = this.modelsService.getModels(filterData.text, 100000)
    }

    if (filterData.sizes.length !== 0) {
      let newItemsFiltered: Model[] = [] 
      for (let item of newItems) {
        for (const value of filterData.sizes) {
          if (item.sizePrice[value as keyof SizePrice] !== undefined) {
            newItemsFiltered.push(item)
            break
          }
        }
      }
      this.items = newItemsFiltered
    } else {
      this.items = newItems
    }

    this.isMobileFiltersVisible = false

  }
}
