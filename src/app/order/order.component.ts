import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesService } from '../services/languages.service';
import { Model, ModelsService } from '../services/models.service';
import { SizePrice } from '../services/models.service';

export interface AddressTips {
  type: string,
  features: {properties: {
    formatted: string,
  }}[],
  query: object,
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  address: string = ''
  addressHints: string[] = []
  model: Model | undefined
  size: string | undefined
  modelImg: string | undefined
  price: string | undefined

  constructor(private http: HttpClient, 
              public langs: LanguagesService, 
              private activatedRoute: ActivatedRoute,
              private modelServeice: ModelsService,
              private router: Router) 
  {
    this.activatedRoute.params.subscribe(params => {
      const id: number = parseInt(params['id'])
      this.size = params['size']
      this.model = this.modelServeice.getModelById(id)
      this.price = this.model?.sizePrice[this.size as keyof SizePrice]
      if (this.model === undefined || this.price === undefined) {
        this.router.navigate(['/'])
      }
      this.modelImg = this.model?.imgs[0]
    })  
  }

  ngOnInit(): void {
  }

  handleAddressChange(value: string) {
    this.address = value
    if (!this.address.trim()) {
      return
    }

    let params = new HttpParams()
    params = params.append('text', this.address)
    params = params.append('lang', this.langs.currentLanguage)
    params = params.append('apiKey', 'c77c8bb0471947ae8fbba8449c614740')

    this.http.get<AddressTips>('https://api.geoapify.com/v1/geocode/autocomplete', {
      params: params
    })
      .subscribe(response => {
        if (response.features.length > 0) {
          this.addressHints = response.features.map((item) => {
            return item.properties.formatted
          })
        }
    }, error => {
      this.addressHints = []
    })
  }
}
