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
  ["US 13.5w"]?: string,
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
        "US 9": '180 €',
        "US 9.5": '180 €',
        "US 10": '180 €',
      },
      imgs: ['./assets/img1_1.jpg','./assets/img1_2.jpg','./assets/img1_3.jpg','./assets/img1_4.jpg']
    },
    {
      id: 2,
      brand: 'Nike',
      model: 'Air Max 1',
      colors: "'Patta Waves Monarch'",
      releaseDate: '15/10/2021',
      sizePrice: {
        "US 5": '240 €',
        "US 6": '240 €',
        "US 8": '240 €',
        "US 9": '240 €',
        "US 10": '240 €',
        "US 10.5": '240 €',
        "US 11": '240 €',
      },
      imgs: ['./assets/img2_1.webp']
    },
    {
      id: 3,
      brand: 'Nike',
      model: 'Air Max 1',
      colors: "'Patta Waves Noise Aqua'",
      releaseDate: '04/11/2021',
      sizePrice: {
        "US 4": '230 €',
        "US 7": '230 €',
        "US 8": '230 €',
        "US 9": '230 €',
        "US 9.5": '230 €',
        "US 10": '230 €',
      },
      imgs: ['./assets/img3_1.webp']
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Wmns Dunk Low',
      colors: "'Lemon Drop'",
      releaseDate: '20/05/2021',
      sizePrice: {
        "US 12": '305 €'
      },
      imgs: ['./assets/img4_1.png']
    },
    {
      id: 5,
      brand: 'Adidas',
      model: 'Yeezy 450',
      colors: "'Cloud White'",
      releaseDate: '07/03/2021',
      sizePrice: {
        "US 9.5": '',
        "US 11": '',
      },
      imgs: ['./assets/img5_1.png']
    },
    {
      id: 6,
      brand: 'Nike X Travis Scott',
      model: 'Air Jordan 6 Retro',
      colors: "'British Khaki'",
      releaseDate: '01/05/2021',
      sizePrice: {
        "US 9.5": '',
      },
      imgs: ['./assets/img6_1.jpeg','./assets/img6_2.jpeg','./assets/img6_3.jpeg','./assets/img6_4.jpeg']
    },
    {
      id: 7,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro 2021',
      colors: "'Lightning'",
      releaseDate: '28/08/2021',
      sizePrice: {
        "US 9": '235 €',
        "US 10": '235 €',
        "US 11": '235 €',
      },
      imgs: ['./assets/img7_1.jpeg','./assets/img7_2.jpeg','./assets/img7_3.jpeg','./assets/img7_4.jpeg']
    },
    {
      id: 8,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Dark Mocha'",
      releaseDate: '30/10/2020',
      sizePrice: {
        "US 9": '345 €',
        "US 9.5": '345 €',
        "US 10": '345 €',
      },
      imgs: ['./assets/img8_1.jpeg','./assets/img8_2.jpeg','./assets/img8_3.jpeg','./assets/img8_4.jpeg']
    },
    {
      id: 9,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High',
      colors: "'Tokyo Bio Hack'",
      releaseDate: '05/09/2020',
      sizePrice: {
        "US 10": '320 €'
      },
      imgs: ['./assets/img9_1.jpeg','./assets/img9_2.jpeg','./assets/img9_3.jpeg','./assets/img9_4.jpeg']
    },
    {
      id: 10,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Bordeaux'",
      releaseDate: '20/11/2021',
      sizePrice: {
        "US 9": '',
        "US 10": ''
      },
      imgs: ['./assets/img10_1.jpeg','./assets/img10_2.jpeg','./assets/img10_3.jpeg','./assets/img10_4.jpeg']
    },
    {
      id: 11,
      brand: 'Nike',
      model: 'Air Jordan 11 Retro 2021',
      colors: "'Cool Grey'",
      releaseDate: '11/12/2021',
      sizePrice: {
        "US 7": '190 €',
        "US 8.5": '190 €',
        "US 10": '190 €',
        "US 11": '190 €',
      },
      imgs: ['./assets/img11_1.jpeg','./assets/img11_2.jpeg','./assets/img11_3.jpeg','./assets/img11_4.jpeg','./assets/img11_5.jpeg']
    },
    {
      id: 12,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Prototype'",
      releaseDate: '24/09/2021',
      sizePrice: {
        "US 8.5": '',
      },
      imgs: ['./assets/img12_1.jpeg','./assets/img12_2.jpeg','./assets/img12_3.jpeg','./assets/img12_4.jpeg','./assets/img12_5.jpeg']
    },
    {
      id: 13,
      brand: 'Nike X Sacai X Fragment Design',
      model: 'LDV Waffle',
      colors: "'Light Smoke Grey'",
      releaseDate: '15/09/2021',
      sizePrice: {
        "US 10": '230 €'
      },
      imgs: ['./assets/img13_1.jpeg','./assets/img13_2.jpeg','./assets/img13_3.jpeg','./assets/img13_4.jpeg','./assets/img13_5.jpeg']
    },
    {
      id: 14,
      brand: 'Nike X Sacai X Clot',
      model: 'LDWaffle',
      colors: "'Net Orange Blaze'",
      releaseDate: '14/09/2021',
      sizePrice: {
        "US 8": '190 €',
        "US 8.5": '190 €',
        "US 9": '190 €',
        "US 9.5": '190 €',
        "US 10": '190 €',
        "US 11": '190 €',
      },
      imgs: ['./assets/img14_1.jpg','./assets/img14_2.jpg','./assets/img14_3.jpg','./assets/img14_4.jpg','./assets/img14_5.jpg']
    },
    {
      id: 15,
      brand: 'Nike X Sacai X Fragment Design',
      model: 'LDV Waffle',
      colors: "'Blackened Blue'",
      releaseDate: '27/08/2021',
      sizePrice: {
        "US 10": '',
        "US 11": '',
        "US 12": '',
      },
      imgs: ['./assets/img15_1.jpeg','./assets/img15_2.jpeg','./assets/img15_3.jpeg','./assets/img15_4.jpeg','./assets/img15_5.jpeg']
    },
    {
      id: 16,
      brand: 'Nike X Travis Scott X Fragment Design',
      model: 'Air Jordan 1 Retro Low',
      colors: "'Blue'",
      releaseDate: '13/08/2021',
      sizePrice: {
        "US 9.5": '870 €',
        "US 10.5": '870 €',
      },
      imgs: ['./assets/img16_1.png']
    },
    {
      id: 17,
      brand: 'Nike',
      model: 'Dunk Low Premium',
      colors: "'Animal Pack - Cheetah'",
      releaseDate: '22/06/2021',
      sizePrice: {
        "US 11": ''
      },
      imgs: ['./assets/img17_1.jpeg','./assets/img17_2.jpeg','./assets/img17_3.jpeg','./assets/img17_4.jpeg','./assets/img17_5.jpeg']
    },
    {
      id: 18,
      brand: 'Nike',
      model: 'Dunk Low SE GS',
      colors: "'Free.99 - White'",
      releaseDate: '07/05/2021',
      sizePrice: {
        "US 7": '125 €',
        "US 11": '125 €',
      },
      imgs: ['./assets/img18_1.jpeg','./assets/img18_2.jpeg','./assets/img18_3.jpeg','./assets/img18_4.jpeg','./assets/img18_5.jpeg']
    },
    {
      id: 19,
      brand: 'Nike X Sacai',
      model: 'VaporWaffle',
      colors: "'Dark Iris'",
      releaseDate: '30/04/2021',
      sizePrice: {
        "US 6": '250 €',
        "US 9": '250 €',
        "US 9.5": '250 €',
        "US 10.5": '250 €',
        "US 13": '250 €'
      },
      imgs: ['./assets/img19_1.jpeg','./assets/img19_2.jpeg','./assets/img19_3.jpeg','./assets/img19_4.jpeg','./assets/img19_5.jpeg']
    },
    {
      id: 20,
      brand: 'Nike X Sacai',
      model: 'VaporWaffle',
      colors: "'Sesame Blue Void'",
      releaseDate: '30/04/2021',
      sizePrice: {
        "US 9.5": '',
        "US 10.5": '',
      },
      imgs: ['./assets/img20_1.jpeg','./assets/img20_2.jpeg','./assets/img20_3.jpeg','./assets/img20_4.jpeg','./assets/img20_5.jpeg']
    },
    {
      id: 21,
      brand: 'Nike X A Ma Maniére',
      model: 'Wmns Air Jordan 3 Retro SP',
      colors: "'Raised By Women'",
      releaseDate: '29/04/2021',
      sizePrice: {
        "US 13.5w": '',
      },
      imgs: ['./assets/img21_1.jpeg','./assets/img21_2.jpeg','./assets/img21_3.jpeg','./assets/img21_4.jpeg','./assets/img21_5.jpeg']
    },
    {
      id: 22,
      brand: 'Adidas',
      model: 'Yeezy Slides',
      colors: "'Pure'",
      releaseDate: '27/04/2021',
      sizePrice: {
        "US 9": '',
      },
      imgs: ['./assets/img22_1.png']
    },
    {
      id: 23,
      brand: 'Adidas',
      model: 'Yeezy Foam Runner',
      colors: "'Sand'",
      releaseDate: '27/03/2021',
      sizePrice: {
        "US 8": ''
      },
      imgs: ['./assets/img23_1.jpeg','./assets/img23_2.jpeg','./assets/img23_3.jpeg','./assets/img23_4.jpeg','./assets/img23_5.jpeg']
    },
    {
      id: 24,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro',
      colors: "'White Oreo'",
      releaseDate: '03/07/2021',
      sizePrice: {
        "US 8": '310 €',
        "US 9": '310 €',
        "US 10": '310 €',
        "US 10.5": '310 €',
      },
      imgs: ['./assets/img24_1.jpeg','./assets/img24_2.jpeg','./assets/img24_3.jpeg','./assets/img24_4.jpeg','./assets/img24_5.jpeg']
    },
    {
      id: 25,
      brand: 'Nike',
      model: 'Dunk Low Premium',
      colors: "'Medium Curry'",
      releaseDate: '29/01/2021',
      sizePrice: {
        "US 10": '320 €'
      },
      imgs: ['./assets/img25_1.jpeg','./assets/img25_2.jpeg','./assets/img25_3.jpeg','./assets/img25_4.jpeg','./assets/img25_5.jpeg']
    },
    {
      id: 26,
      brand: 'Nike X AMBUSH',
      model: 'Dunk High',
      colors: "'Cosmic Fuchsia'",
      releaseDate: '05/02/2021',
      sizePrice: {
        "US 11": '',
      },
      imgs: ['./assets/img26_1.jpeg','./assets/img26_2.jpeg','./assets/img26_3.jpeg','./assets/img26_4.jpeg','./assets/img26_5.jpeg']
    },
    {
      id: 27,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'University Blue'",
      releaseDate: '07/03/2021',
      sizePrice: {
        "US 10": '330 €',
        "US 9": '330 €',
      },
      imgs: ['./assets/img27_1.jpeg','./assets/img27_2.jpeg','./assets/img27_3.jpeg','./assets/img27_4.jpeg','./assets/img27_5.jpeg']
    },
    {
      id: 28,
      brand: 'Nike X Sacai',
      model: 'VaporWaffle SP',
      colors: "'Villain Red'",
      releaseDate: '22/12/2020',
      sizePrice: {
        "US 10.5": ''
      },
      imgs: ['./assets/img28_1.png']
    },
    {
      id: 29,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Volt Gold'",
      releaseDate: '10/01/2021',
      sizePrice: {
        "US 9.5": '215 €',
      },
      imgs: ['./assets/img29_1.jpeg','./assets/img29_2.jpeg','./assets/img29_3.jpeg','./assets/img29_4.jpeg','./assets/img29_5.jpeg']
    },
    {
      id: 30,
      brand: 'Nike',
      model: 'Dunk Low SP Retro 2020',
      colors: "'Ceramic'",
      releaseDate: '20/11/2020',
      sizePrice: {
        "US 8": ''
      },
      imgs: ['./assets/img30_1.jpeg','./assets/img30_2.jpeg','./assets/img30_3.jpeg','./assets/img30_4.jpeg','./assets/img30_5.jpeg']
    },
    {
      id: 31,
      brand: 'Nike',
      model: 'SB Dunk Low Denim',
      colors: "'Sashiko'",
      releaseDate: '01/08/2020',
      sizePrice: {
        "US 10": ''
      },
      imgs: ['./assets/img31_1.jfif']
    },
    {
      id: 32,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro',
      colors: "'University Blue'",
      releaseDate: '29/04/2021',
      sizePrice: {
        "US 10": '320 €',
        "US 10.5": '320 €',
        "US 11": '320 €',
      },
      imgs: ['./assets/img32_1.jpeg','./assets/img32_2.jpeg','./assets/img32_3.jpeg','./assets/img32_4.jpeg','./assets/img32_5.jpeg']
    },
    {
      id: 33,
      brand: 'Adidas',
      model: 'Yeezy Boost 350 V2',
      colors: "'Bred'",
      releaseDate: '12/02/2017',
      sizePrice: {
        "US 12.5": ''
      },
      imgs: ['./assets/img33_1.jpeg','./assets/img33_2.jpeg','./assets/img33_3.jpeg','./assets/img33_4.jpeg','./assets/img33_5.jpeg']
    },
    {
      id: 34,
      brand: 'Nike',
      model: 'Wmns Air Jordan 1 Retro High OG',
      colors: "'Silver Toe'",
      releaseDate: '20/02/2021',
      sizePrice: {
        "US 10": '',
        "US 10.5": '',
      },
      imgs: ['./assets/img34_1.jpeg','./assets/img34_2.jpeg','./assets/img34_3.jpeg','./assets/img34_4.jpeg','./assets/img34_5.jpeg']
    },
    {
      id: 35,
      brand: 'Adidas',
      model: 'Yeezy Boost 350 V2',
      colors: "'Dazzling Blue'",
      releaseDate: '27/02/2022',
      sizePrice: {
        "US 12": '',
        "US 8": '',
      },
      imgs: ['./assets/img35_1.jpeg','./assets/img35_2.jpeg','./assets/img35_3.jpeg','./assets/img35_4.jpeg','./assets/img35_5.jpeg']
    },
    {
      id: 36,
      brand: 'Nike X Clot',
      model: 'Air Max 1 2021',
      colors: "'Kiss of Death'",
      releaseDate: '28/02/2021',
      sizePrice: {
        "US 8": '',
        "US 9.5": '',
        "US 11": '',
      },
      imgs: ['./assets/img36_1.jpeg','./assets/img36_2.jpeg','./assets/img36_3.jpeg','./assets/img36_4.jpeg','./assets/img36_5.jpeg']
    },
    {
      id: 37,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Patent Bred'",
      releaseDate: '31/12/2021',
      sizePrice: {
        "US 11": '180 €',
      },
      imgs: ['./assets/img37_1.jpeg','./assets/img37_2.jpeg','./assets/img37_3.jpeg','./assets/img37_4.jpeg','./assets/img37_5.jpeg']
    },
    {
      id: 38,
      brand: 'Nike',
      model: 'Air Jordan 1 Mid',
      colors: "'Sonics'",
      releaseDate: '08/12/2021',
      sizePrice: {
        "US 9": '',
      },
      imgs: ['./assets/img38_1.webp']
    },

    {
      id: 39,
      brand: 'Nike X Off-White',
      model: 'Air Rubber Dunk',
      colors: "'University Blue'",
      releaseDate: '02/10/2020',
      sizePrice: {
        "US 9": '',
        "US 10.5": '',
      },
      imgs: ['./assets/img39_1.png']
    },
    {
      id: 40,
      brand: 'Nike',
      model: 'Travis Scott x Air Max 270 React ENG',
      colors: "'Cactus Trails'",
      releaseDate: '29/05/2020',
      sizePrice: {
        "US 9": '',
        "US 12": '',
      },
      imgs: ['./assets/img40_1.jpeg','./assets/img40_2.jpeg','./assets/img40_3.jpeg']
    },
    {
      id: 41,
      brand: 'Nike X Parra',
      model: 'Dunk Low Pro SB',
      colors: "'Abstract Art'",
      releaseDate: '01/08/2021',
      sizePrice: {
        "US 8.5": '290 €',
        "US 10": '290 €',
        "US 11": '290 €',
      },
      imgs: ['./assets/img41_1.jpeg','./assets/img41_2.jpeg','./assets/img41_3.jpeg','./assets/img41_4.jpeg','./assets/img41_5.jpeg']
    },
    {
      id: 42,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro',
      colors: "'Taupe Haze'",
      releaseDate: '28/02/2021',
      sizePrice: {
        "US 10": '',
      },
      imgs: ['./assets/img42_1.jpeg','./assets/img42_2.jpeg','./assets/img42_3.jpeg','./assets/img42_4.jpeg','./assets/img42_5.jpeg']
    },

    {
      id: 43,
      brand: 'Nike',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Hyper Royal'",
      releaseDate: '18/04/2021',
      sizePrice: {
        "US 9": ''
      },
      imgs: ['./assets/img43_1.jpeg','./assets/img43_2.jpeg','./assets/img43_3.jpeg','./assets/img43_4.jpeg','./assets/img43_5.jpeg']
    },
    {
      id: 44,
      brand: 'Nike X Maison Chateau Rouge',
      model: 'Air Jordan 1 Mid SE',
      colors: "'Fearless'",
      releaseDate: '01/12/2019',
      sizePrice: {
        "US 8.5": '',
        "US 9": ''
      },
      imgs: ['./assets/img44_1.jpeg','./assets/img44_2.jpeg','./assets/img44_3.jpeg','./assets/img44_4.jpeg','./assets/img44_5.jpeg']
    },
    {
      id: 45,
      brand: 'Nike X Off-White',
      model: 'Air Jordan 2 Retro Low SP',
      colors: "'White Varsity Red'",
      releaseDate: '12/11/2021',
      sizePrice: {
        "US 8": ''
      },
      imgs: ['./assets/img45_1.jpeg','./assets/img45_2.jpeg','./assets/img45_3.jpeg','./assets/img45_4.jpeg','./assets/img45_5.jpeg']
    },
    {
      id: 46,
      brand: 'Nike X Travis Scott',
      model: 'Air Jordan 1 Retro High OG',
      colors: "'Mocha'",
      releaseDate: '06/06/2019',
      sizePrice: {
        "US 10.5": '2200 €'
      },
      imgs: ['./assets/img46_1.jpeg','./assets/img46_2.jpeg','./assets/img46_3.jpeg','./assets/img46_4.jpeg','./assets/img46_5.jpeg']
    },

    {
      id: 47,
      brand: 'Nike X Off-White',
      model: 'Dunk Low',
      colors: "'Pine Green'",
      releaseDate: '21/12/2019',
      sizePrice: {
        "US 8.5": ''
      },
      imgs: ['./assets/img47_1.jpeg','./assets/img47_2.jpeg','./assets/img47_3.jpeg','./assets/img47_4.jpeg']
    },
    {
      id: 48,
      brand: 'Nike',
      model: 'Dunk Low SB',
      colors: "'Mummy'",
      releaseDate: '29/10/2021',
      sizePrice: {
        "US 7.5": '',
        "US 9": '',
        "US 12": '',
      },
      imgs: ['./assets/img48_1.jpeg','./assets/img48_2.jpeg','./assets/img48_3.jpeg','./assets/img48_4.jpeg','./assets/img48_5.jpeg']
    },
    {
      id: 49,
      brand: 'Nike',
      model: 'Air Jordan 4 Retro SP',
      colors: "'30th Anniversary Union Desert Moss'",
      releaseDate: '24/06/2021',
      sizePrice: {
        "US 10": ''
      },
      imgs: ['./assets/img49_1.webp','./assets/img49_2.webp']
    },
    {
      id: 50,
      brand: 'Nike X Off-White',
      model: 'Air Force 1 Low',
      colors: "'Volt'",
      releaseDate: '20/12/2018',
      sizePrice: {
        "US 9.5": ''
      },
      imgs: ['./assets/img50_1.jpeg','./assets/img50_2.jpeg','./assets/img50_3.jpeg','./assets/img50_4.jpeg','./assets/img50_5.jpeg']
    },
    
  ]
  sizesArray: string[] = ['US 3.5','US 4','US 4.5','US 5','US 5.5','US 6','US 6.5','US 7','US 7.5','US 8','US 8.5','US 9','US 9.5','US 10','US 10.5','US 11','US 11.5','US 12','US 12.5','US 13','US 13.5','US 13.5w','US 14','US 14.5','US 15','US 15.5','US 16','US 16.5','US 17','US 17.5','US 18','US 18.5','US 19','US 19.5','US 20','US 20.5','US 21','US 21.5','US 22']
  
  getModels(title: string, limit: number): Model[] {
    let result: Model[] = []
    let counter: number = 0
    
    for (let item of this.models) {
      const itemDescription: string = (item.brand + " " + item.model).toLowerCase() 
      if (itemDescription.includes(title.toLowerCase()) && counter < limit) {
        result.push(item)
        counter++
      }
    }

    return result
  }

  getModelById(id: number): Model|undefined  {
    for (let item of this.models) {
      if (item.id === id) {
        return item
      }
    }
    return undefined
  }
}
