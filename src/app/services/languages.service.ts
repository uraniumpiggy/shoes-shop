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

    mainTitle: string,
    mainSubtitle: string,
    mainCatalogButton: string,
    mainNewCarouselTitle: string,
    mainTeaserTitle: string,
    mainTesserLine1: string,
    mainTesserLine2: string,
    mainTesserLine3: string,
    mainHaveAQuestion: string,
    mainHowItWorks: string,
    mainGuarantee: string,
    mainAnswers: string,
    mainContacts: string,
    mainDocuments: string,
    mainMail: string,
    mainOr: string,
    mainSocialMedia: string,
    mainMobileWeHaveAns: string,
    mainMobileFAQ: string,
    faqTitle: string,
    faqNotFindAns: string,
    faqContactViaEmail: string,

    faqDocTitle: string,
    faqDocLink1: string,
    faqDocLink2: string,
    faqDocLink3: string,
    faqDocLink4: string,

    faqDocGuaranteeP1: string,
    faqDocGuaranteeP2: string,
    faqDocGuaranteeP3: string,
    faqDocGuaranteeP4: string,
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
        learnMore: 'Подробнее',

        mainTitle: 'Самый безопасный маркетплейс',
        mainSubtitle: 'Оригинальная лимитированная обувь, одежда и аксессуары',
        mainCatalogButton: 'Смотреть каталог',
        mainNewCarouselTitle: 'Новое',
        mainTeaserTitle: 'Самая безопасная платформа для покупки и продажи редкой одежды, обуви и аксессуаров.',
        mainTesserLine1: 'Только оригинальная продукция',
        mainTesserLine2: 'Быстрая доставка по всей России',
        mainTesserLine3: 'Гарантии безопасности и отсутствие риска',
        mainHaveAQuestion: 'Остались вопросы?',

        mainHowItWorks: 'Как работает площадка',
        mainGuarantee: 'Гарантии оригинальности',
        mainAnswers: 'Ответы на часто задаваемые вопросы',
        mainContacts: 'Контактная информация',
        mainDocuments: 'Официальные документы',

        mainMobileWeHaveAns: 'Вероятно, у нас уже есть ответ на ваш вопрос:',
        mainMobileFAQ: 'Смотреть F.A.Q.',
        mainMail: 'Если у вас есть какие-либо вопросы или пожелания, вы всегда можете написать нам на почту',
        mainOr: 'или',
        mainSocialMedia: 'в Телеграм или Вконтакте',
        faqTitle: 'F. A. Q.',
        faqNotFindAns: 'Не нашли, что искали?',
        faqContactViaEmail: 'Напишите нам на почту',

        faqDocTitle: 'Оферта',
        faqDocLink1: 'Агентский договор',
        faqDocLink2: 'Лицензионный договор',
        faqDocLink3: 'Правила продажи',
        faqDocLink4: 'Политика обработки персональных данных',

        faqDocGuaranteeP1: `Все вещи, купленные на resell point, являются оригинальными и новыми. Каждая вещь проходит через наш офис, где
        проверяется двумя независимыми командами на подлинность и отсутствие признаков ношения. После успешного
        прохождения всех проверок, мы крепим на каждую вещь специальную пломбу “resell point verified”, которая
        является гарантией оригинальности товара.`,
        faqDocGuaranteeP2: `Все вещи проверяются настоящими профессионалами – командой `,
        faqDocGuaranteeP3: `. Мы очень кропотливо подходим к своей
        работе, чтобы вы могли быть уверены, что приобретаете подлинную продукцию.`,
        faqDocGuaranteeP4: `В случае, если вы считаете, что получили поддельный товар, пожалуйста, незамедлительно свяжитесь с нами. Мы
        рассматриваем каждое обращение в индивидуальном порядке, если на товаре присутствует пломба “resell point
        verified”. Если вы сомневаетесь в подлинности полученного товара, вы можете отправить его к нам назад на
        перепроверку с пояснением, что именно по вашему мнению указывает на неоригинальность товара. В случае, если
        повторная проверка покажет, что товар действительно поддельный – мы вернем вам стоимость покупки в полном
        объеме, а также возместим все расходы на пересылку товара для перепроверки.`,
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
            learnMore: 'Learn more',

            mainTitle: 'Most secure marketplace',
            mainSubtitle: 'Original limited edition shoes, clothes and accessories',
            mainCatalogButton: 'View catalog',
            mainNewCarouselTitle: 'New',
            mainTeaserTitle: 'The safest platform to buy and sell rare clothes, shoes and accessories.',
            mainTesserLine1: 'Only original products',
            mainTesserLine2: 'Fast delivery throughout Russia',
            mainTesserLine3: 'Safety and risk free',
            mainHaveAQuestion: 'Any questions?',

            mainHowItWorks: 'How the site works',
            mainGuarantee: 'Originality Guarantees',
            mainAnswers: 'Answers to frequently asked questions',
            mainContacts: 'Contact Information',
            mainDocuments: 'Official Documents',
            mainMobileWeHaveAns: 'We probably already have the answer to your question:',
            mainMobileFAQ: 'View F.A.Q.',
            mainMail: 'If you have any questions or requests, you can always email us',
            mainOr: 'or',
            mainSocialMedia: 'in Telegram or Vkontakte',
            faqTitle: 'F. A. Q.',
            faqNotFindAns: "Didn't find what you were looking for?",
            faqContactViaEmail: 'Email us',

            faqDocTitle: 'Offer',
            faqDocLink1: 'Agency Agreement',
            faqDocLink2: 'License Agreement',
            faqDocLink3: 'Sale Rules',
            faqDocLink4: 'Personal data processing policy',

            faqDocGuaranteeP1: `All items purchased from resell point are original and new. Every item passes through our office, where
            tested by two independent teams for authenticity and no signs of wear. After a successful
            passing all checks, we attach a special “resell point verified” seal to each item, which
            is a guarantee of the originality of the goods.`,
            faqDocGuaranteeP2: `All things are checked by true professionals - the team `,
            faqDocGuaranteeP3: `. We are very meticulous about our
            work so that you can be sure you are purchasing a genuine product.`,
            faqDocGuaranteeP4: `If you think you have received a counterfeit product, please contact us immediately. We
            we consider each appeal individually, if the product has a “resell point” seal
            verified". If you doubt the authenticity of the received goods, you can send it back to us at
            double-checking with an explanation of what exactly, in your opinion, indicates the non-original goods. If
            a second check will show that the product is really fake - we will refund your purchase price in full
            volume, as well as reimburse all costs for sending the goods for re-checking.`,
        }

        this.pagesWrapper = newText
        console.log(this.pagesWrapper)

    }
}