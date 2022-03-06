import { Component, Input, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';
import { SizePrice } from 'src/app/services/models.service';

@Component({
  selector: 'app-model-sizes',
  templateUrl: './model-sizes.component.html',
  styleUrls: ['./model-sizes.component.scss']
})
export class ModelSizesComponent implements OnInit {

  @Input() sizes: SizePrice | any
  sizesToView: string[] = [] 

  constructor(public langs: LanguagesService) { }

  ngOnInit(): void {
    if (this.sizes !== undefined) {
      for (let size in this.sizes) {
        this.sizesToView.push(size)
      }
    }
  }

}
