import { Injectable } from '@angular/core';

export interface SizePrice {
  ["US 3.5"]?: string,
  ["US 4"]?: string,
  ["US 4.5"]?: string,
  ["US 5"]?: string,
  ["US 5.5"]?: string,
  ["US 6"]?: string,
  ["US 6.5"]?: string,
  ["US 7"]?: string,
  ["US 7.5"]?: string,
  ["US 8"]?: string,
  ["US 8.5"]?: string,
  ["US 9"]?: string,
  ["US 9.5"]?: string,
  ["US 10"]?: string,
  ["US 10.5"]?: string,
  ["US 11"]?: string,
  ["US 11.5"]?: string,
  ["US 12"]?: string,
  ["US 12.5"]?: string,
  ["US 13"]?: string,
  ["US 13.5"]?: string,
  ["US 14"]?: string,
  ["US 14.5"]?: string,
  ["US 15"]?: string,
  ["US 15.5"]?: string,
  ["US 16"]?: string,
  ["US 16.5"]?: string,
  ["US 17"]?: string,
  ["US 17.5"]?: string,
  ["US 18"]?: string,
  ["US 18.5"]?: string,
  ["US 19"]?: string,
  ["US 19.5"]?: string,
  ["US 20"]?: string,
  ["US 20.5"]?: string,
  ["US 21"]?: string,
  ["US 21.5"]?: string,
  ["US 22"]?: string,
}

export interface Model {
  readonly id: number, 
  brand: string,
  model: string,
  colors: string,
  releaseDate: string,
  sizePrice: SizePrice,
  imgs: string[],
}

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  models: Model[] = [
    {
      id: 1,
      brand: 'Nike',
      model: 'Dunk Low Retro 2021',
      colors: "'White Black'",
      releaseDate: '14/01/2021',
      sizePrice: {
        "US 11.5": '10000 Э',
        "US 12": '10000 Э'
      },
      imgs: ['assets/img1_1.jpg','assets/img1_2.jpg','assets/img1_3.jpg','assets/img1_4.jpg']
    },
    {
      id: 2,
      brand: 'Nike',
      model: 'Air Max 1',
      colors: "'Patta Waves Monarch'",
      releaseDate: '15/10/2021',
      sizePrice: {
        "US 13.5": '10000 Э',
        "US 12": '10000 Э',
        "US 13": '',
        "US 12.5": '5000 Э'
      },
      imgs: ['assets/img2_1.webp']
    },
    {
      id: 3,
      brand: 'Nike',
      model: 'Air Max 1',
      colors: "'Patta Waves Noise Aqua'",
      releaseDate: '04/11/2021',
      sizePrice: {
        "US 13.5": '10000 Э',
        "US 12": '10000 Э',
        "US 13": '',
        "US 12.5": '5000 Э',
        "US 3.5": '10000 Э',
        "US 4": '10000 Э',
      },
      imgs: ['assets/img3_1.webp']
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Wmns Dunk Low',
      colors: "'Lemon Drop'",
      releaseDate: '20/05/2021',
      sizePrice: {
        "US 15.5": '10000 Э',
        "US 20": '10000 Э',
        "US 21": '',
        "US 22": '5000 Э'
      },
      imgs: ['assets/img4_1.png']
    },
    {
      id: 5,
      brand: 'Adidas',
      model: 'Yeezy 450',
      colors: "'Cloud White'",
      releaseDate: '07/03/2021',
      sizePrice: {
        "US 13.5": '10000 Э',
        "US 12": '10000 Э',
        "US 13": '',
        "US 12.5": '5000 Э'
      },
      imgs: ['assets/img5_1.png']
    },
    {
      id: 6,
      brand: 'Nike X Travis Scott',
      model: 'Air Jordan 6 Retro',
      colors: "'British Khaki'",
      releaseDate: '01/05/2021',
      sizePrice: {
        "US 11.5": '10000 Э',
        "US 12": '10000 Э'
      },
      imgs: ['assets/img6_1.jpeg','assets/img6_2.jpeg','assets/img6_3.jpeg','assets/img6_4.jpeg']
    },
    {
      id: 7,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro 2021',
      colors: "'Lightning'",
      releaseDate: '28/08/2021',
      sizePrice: {
        "US 13.5": '10000 Э',
        "US 12": '10000 Э',
        "US 13": '',
        "US 12.5": '5000 Э'
      },
      imgs: ['assets/img7_1.jpeg','assets/img7_2.jpeg','assets/img7_3.jpeg','assets/img7_4.jpeg']
    },
    {
      id: 8,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Dark Mocha'",
      releaseDate: '30/10/2020',
      sizePrice: {
        "US 13.5": '10000 Э',
        "US 12": '10000 Э',
        "US 13": '',
        "US 12.5": '5000 Э',
        "US 3.5": '10000 Э',
        "US 4": '10000 Э',
      },
      imgs: ['assets/img8_1.jpeg','assets/img8_2.jpeg','assets/img8_3.jpeg','assets/img8_4.jpeg']
    },
    {
      id: 9,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High',
      colors: "'Tokyo Bio Hack'",
      releaseDate: '05/09/2020',
      sizePrice: {
        "US 15.5": '10000 Э',
        "US 20": '10000 Э',
        "US 21": '',
        "US 22": '5000 Э'
      },
      imgs: ['assets/img9_1.jpeg','assets/img9_2.jpeg','assets/img9_3.jpeg','assets/img9_4.jpeg']
    },
    
  ]
}
