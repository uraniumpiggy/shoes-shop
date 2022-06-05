import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleAddressChange(value: string) {
    this.address = value
    if (!this.address.trim()) {
      return
    }

    let params = new HttpParams()
    params = params.append('text', this.address)
    params = params.append('lang', 'ru')
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
    })
  }
}
