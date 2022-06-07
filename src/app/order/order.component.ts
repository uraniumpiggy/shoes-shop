import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError, timeout } from 'rxjs';
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

  checkoutForm = this.formBuilder.group({
    fullName: '',
    email: ['', Validators.email],
    phoneNumber: '',
    fullAddress: '',
  })

  constructor(private http: HttpClient, 
              public langs: LanguagesService, 
              private activatedRoute: ActivatedRoute,
              private modelServeice: ModelsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) 
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

  handleAddressChange() {
    this.address = this.checkoutForm.get('fullAddress')?.value
    if (!this.address.trim()) {
      return
    }

    let params = new HttpParams()
    params = params.append('text', this.address)
    params = params.append('lang', this.langs.currentLanguage)
    params = params.append('apiKey', 'c77c8bb0471947ae8fbba8449c614740')

    this.http.get<AddressTips>('https://api.geoapify.com/v1/geocode/autocomplete', {
      params: params
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.addressHints = []
        return throwError(() => {
          new Error(error.message)
        })
      }),
    )
      .subscribe(
        (response: AddressTips) => {
        if (response.features.length > 0) {
          this.addressHints = response.features.map((item) => {
            return item.properties.formatted
          })
        }
      }
    )
  }

  handleSubmit() {
    if (this.checkoutForm.value.fullName === '' ||
        !this.checkoutForm.get('email')?.valid || 
        this.checkoutForm.value.email === '' ||
        this.checkoutForm.value.phoneNumber === '' ||
        this.checkoutForm.value.fullAddress === '') 
    {
      this.snackBar.open('Неверно заполнена форма', 'Закрыть')
    }
    console.log(this.checkoutForm.value.fullName)
  }
}
