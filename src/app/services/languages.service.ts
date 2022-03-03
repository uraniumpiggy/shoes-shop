import { Injectable } from "@angular/core";


export interface PagesText {
    catalog: string,
    reviews: string,
    guarantees: string,
    contacts: string,
    shoues: string,
    clothes: string,
    accessories: string,
    searchPlaceholder: string,
    menuText1: string,
    menuText2: string,
    platform: string,
    howItWorks: string,
    pay: string, 
    saleRules: string,
    latestReleases: string,
    deliveryAndReturns: string,
    support: string,

    emptyCatalogText: string,
    modelVendorCode: string,
    modelModel: string,
    modelBrand: string,
    modelColoring: string,
    modelReliaseDate: string,
    modelPayButton: string,
    modelYouWillLike: string,
    learnMore: string,
}


@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    pagesWrapper: PagesText = {
        catalog: 'Каталог',
        reviews: 'Отзывы',
        guarantees: 'Гарантии',
        contacts: 'Контакты',
        shoues: 'Обувь',
        clothes: 'Одежда',
        accessories: 'Аксессуары',
        menuText1: 'Никогда не пропускайте важные события.',
        menuText2: 'Подпишитесь на наши соц. сети.',
        searchPlaceholder: 'Введите название модели',
        platform: 'Платформа',
        howItWorks: 'Как это работает',
        pay: 'Оплата',
        saleRules: 'Правила продажи',
        latestReleases: 'Последние релизы',
        deliveryAndReturns: 'Доставка и возврат',
        support: 'Поддержка',

        emptyCatalogText: 'Упс, тут пока что ничего нет.',
        modelVendorCode: 'Артикул',
        modelModel: 'Модель',
        modelBrand: 'Бренд',
        modelColoring: 'Расцветка',
        modelReliaseDate: 'Дата релиза',
        modelPayButton: 'Купить',
        modelYouWillLike: 'Вам понравится',
        learnMore: 'Подробнее'
    }

    translateToUS() {
        const newText: PagesText = {
            catalog: 'Catalogue',
            reviews: 'Reviews',
            guarantees: 'Guarantees',
            contacts: 'Contacts',
            shoues: 'Shoes',
            clothes: 'Clothes',
            accessories: 'Accessories',
            menuText1: 'Never miss an important event.',
            menuText2: 'Follow our social media networks.',
            searchPlaceholder: 'Enter model name',
            platform: 'Platform',
            howItWorks: 'How it works',
            pay: 'Payment',
            saleRules: 'Sale rules',
            latestReleases: 'Latest releases',
            deliveryAndReturns: 'Delivery and returns',
            support: 'Support',

            emptyCatalogText: 'Oops, nothing here yet.',
            modelVendorCode: 'Vendor code',
            modelModel: 'Model',
            modelBrand: 'Brand',
            modelColoring: 'Coloring',
            modelReliaseDate: 'Release Date',
            modelPayButton: 'Buy',
            modelYouWillLike: 'You will like it',
            learnMore: 'Learn more'
        }

        this.pagesWrapper = newText
        console.log(this.pagesWrapper)

    }
}