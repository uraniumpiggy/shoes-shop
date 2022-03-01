import { Component, OnInit } from '@angular/core';
import { Model, ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-app-shoes',
  templateUrl: './app-shoes.component.html',
  styleUrls: ['./app-shoes.component.scss']
})
export class AppShoesComponent implements OnInit {

  items: Model[] = []
  isInStock: boolean = false

  isMobileFiltersVisible: boolean = false

  constructor(private modelsService: ModelsService) { }

  ngOnInit(): void {
    this.items = this.modelsService.models
  }

}
