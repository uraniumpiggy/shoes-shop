import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelsService, SizePrice } from 'src/app/services/models.service';
import { filterSettings } from '../app-shoes/app-shoes.component';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})
export class AppFiltersComponent implements OnInit {
  sizesArray: string[] = []
  sizeActiveMap: Map<string, boolean> = new Map()
  searchString: string = ''
  @Output() onSearch = new EventEmitter<filterSettings>()

  constructor(private modelService: ModelsService) {
    this.sizesArray = this.modelService.sizesArray.slice(0, 28) 
    for (let size of this.sizesArray) {
      this.sizeActiveMap.set(size, false)
    }
  }

  resetFilters() {
    for (let size of this.sizesArray) {
      this.sizeActiveMap.set(size, false)
    }
    this.onSearch.emit({text: '', sizes: []})
  }

  searchItems() {
    let sizes: string[] = []
    for (let key of this.sizeActiveMap.keys()) {
      if (this.sizeActiveMap.get(key)) {
        sizes.push(key)
      }
    }
    const collectedData: filterSettings = {
      text: this.searchString,
      sizes: sizes,
    } 
    this.onSearch.emit(collectedData)
  }

  toggleActive(key: string) {
    this.sizeActiveMap.set(key, !this.sizeActiveMap.get(key))
  }

  ngOnInit(): void {
    
  }

}
