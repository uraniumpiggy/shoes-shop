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
    deliveryAndReturns: string,
    support: string,
    faqMenuTitle: string,

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
    // contacts
    aboutReseller: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
    p6: string,
    p7: string,
    p8: string,
    p9: string,

    filtersLabel: string,
    hideFilters: string,
    resetFilters: string,
    filterSize: string,
    filterModels: string,
    filterShowRes: string,
    filtersSearch: string,

    delAndReturns1: string,
    delAndReturns2: string,
    delAndReturns3: string,
    delAndReturns4: string,
    delAndReturns5: string,
    delAndReturns6: string,
    delAndReturns7: string,
    delAndReturns8: string,

    faqAnsHeader1: string,
    faqAns1p1: string,
    faqAns1p2: string,
    faqAns1p3: string,
    faqAns1p4: string,
    faqAns1p5: string,
    faqAns1p6: string,
    faqAnsHeader2: string,
    faqAns2p1: string,
    faqAnsHeader3: string,
    faqAns3p1: string,
    faqAnsHeader4: string,
    faqAns4p1: string,
    faqAnsHeader5: string,
    faqAns5p1: string,

    linkInst1: string,
    linkInst2: string,
    linkInstVk3: string,
    linkInst4: string,
    linkInst5: string,

    sizeHeader: string,
    sizeHeaderAdmin: string,
    avaluableSizes: string,

    feedbackHeader: string,
    feedbackp1: string,
    feedbackp2: string,
    feedbackp3: string,
    feedbackp4: string,

    faqPaymentP1: string,
}


@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    currentLanguage: string = 'en'

    pagesWrapper: PagesText = {
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
        deliveryAndReturns: 'Delivery and returns',
        support: 'Support',
        faqMenuTitle: "FAQ",

        emptyCatalogText: 'Oops, nothing here yet. Expect more stock soon.',
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
        mainTesserLine2: 'Fast delivery worldwide',
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
        mainSocialMedia: 'in Instagram or Vkontakte',
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

        aboutReseller: "Hi, I've been in the shoes and apparel business for over 3 years and I'm glad to welcome you to my store website. This is where you can find original shoes at a great price, with express delivery worldwide. You can contact any questions using our contacts listed on our website, we also have a separate category of answers to questions (FAQ) ",
        p1: "We're always in touch! We are ready to answer your questions daily from 10:00 to 23:30 (Moscow time).",
        p2: 'Our mail: support@resellpoint.cc',
        p3: 'Reception of parcels: 5th Donskoy proezd 15с7, Moscow. Opening hours 14:00 - 18:00 daily. Please call or email us in advance.',
        p4: 'Full name of the organization: Limited Liability Company “RESELLPOINT” / “RESELLPOINT” LLC',
        p5: 'Address of PVZ SDEK: Moscow, st. Gagarinsky district, 2k1 (PVZ code: MSK362)',
        p6: 'BIN: 1187847219892',
        p7: 'TIN: 7811702969',
        p8: 'checkpoint: 781101901',
        p9: 'Legal address: St. Petersburg, Khrustalnaya st., 14. Telephone +7 (495) 006-92-39',
        filtersLabel: "Filters",
        hideFilters: "Hide filters",
        resetFilters: 'Reset filters',
        filterSize: 'Size',
        filterModels: 'Models',
        filterShowRes: 'Show results',
        filtersSearch: 'Search',

        delAndReturns1: "The delivery process consists of 4 stages",
        delAndReturns2: "- Order acceptance;",
        delAndReturns3: "- Order processing (check integrity and originality);",
        delAndReturns4: "- Sending order;",
        delAndReturns5: "- Providing the buyer with a tracking number for tracking the parcel, as well as a declaration.",
        delAndReturns6: "Delivery time is calculated individually and depends on your country, check with the site administration.",
        delAndReturns7: "Shipping is worldwide, with some exceptions.",
        delAndReturns8: "ResellPoint is solely responsible for your order and its safety.",

        faqAnsHeader1: "1. Where should I ship my item after purchase confirmation?",
        faqAns1p1: "The package must be sent by CDEK courier service to the pickup point at:",
        faqAns1p2: "Moscow, Gagarinsky district st., 2k1 (PVZ code: MSK362) +7 (495) 006-92-39",
        faqAns1p3: "If you live in another country, please contact the site administration and follow their instructions.",
        faqAns1p4: "Also, you can bring the item to the office on your own to our office at the address: Moscow, Varshavskoye shosse 1с1. Business center “W PLAZA”, red brick building. You can leave the item at any time at the reception of the business center. Please , put a sheet with your e-mail and lot number in the box.",
        faqAns1p5: "If you're shipping sneakers, please remember to take care of the packaging so that the box doesn't get damaged in transit.",
        faqAns1p6: "If you are in Moscow, you can bring the sneakers to our office in person. To do this, write to us at support@resellpoint.cc with the note 'I want to personally deliver the sneakers.' In a reply email, we will send you the address and time in which we can accept your goods.",
        faqAnsHeader2: "2. I think they sent me a fake, what should I do?",
        faqAns2p1: "If you are sure that the item you bought on the platform is non-original, you can write to us at support@resellpoint.cc and send the sneakers back to our office. We maintain a database with photos of all sneakers sold, and after Once we are sure it is the exact shoe we sent you, we will re-evaluate it for originality.",
        faqAnsHeader3: "3. What regions do you ship to?",
        faqAns3p1: "Shipping is worldwide with no restrictions.",
        faqAnsHeader4: "4. Will there be an app for phones?",
        faqAns4p1: "Yes, work on the application is already underway, but at the moment the service is only available in the site format at https://resellpoint.cc/",
        faqAnsHeader5: "5. How long will the delivery take?",
        faqAns5p1: "Check with the administrator for the number of delivery days",

        linkInst1: 'Shop on Instagram',
        linkInst2: 'Instagram for shopping',
        linkInstVk3: 'Sneakers News',
        linkInst4: 'Personal page',
        linkInst5: 'Personal page',

        sizeHeader: 'Available sizes',
        sizeHeaderAdmin: 'Check with admin for pricing',
        avaluableSizes: 'Contact administrator to purchase.',

        feedbackHeader: "Customer Feedback",
        feedbackp1: "Dear friends, Resell Point has been working for you for more than one year. We value our reputation and always work for the sake of customers. We can always agree on the price, installments and delivery issues. We give you a full guarantee of the protection of your package and a guarantee originality, all sneakers are checked for originality and are bought only in official branded stores.",
        feedbackp2: "You can leave a review on our site, to do this, contact the site administration and we will publish everything, thanks!",
        feedbackp3: "To leave a review, email us ",
        feedbackp4: " with feedback and we will publish everything",

        faqPaymentP1: "To purchase an item and pay for it, please contact the administrator.",
    }  

    translateToRU() {
        this.currentLanguage = 'ru'

        const newText: PagesText = {
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
            deliveryAndReturns: 'Доставка и возврат',
            support: 'Поддержка',
            faqMenuTitle: "FAQ",
    
            emptyCatalogText: 'Упс, тут пока что ничего нет. Cовсем скоро ожидайте пополнение ассортимента.',
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
            mainTesserLine2: 'Быстрая доставка по всему миру',
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
            mainSocialMedia: 'в Инстаграм или Вконтакте',
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
    
            aboutReseller: '«Здравствуйте,я занимаюсь обувью и одеждой уже на протяжении уже более 3 лет и я рад вас приветствовать на сайте моего магазина.Именно здесь вы можете найти оригинальную обувь по отличной цене,с экспресс доставкой по всему миру.Вы можете обратиться по любым вопросам использовав наши контакты указанные на нашем сайте,также у нас есть отдельная категория ответов на вопросы(FAQ)»',
            p1: 'Мы всегда на связи! Готовы ответить на ваши вопросы ежедневно с 10:00 до 23:30 (время московское).',
            p2: 'Наша почта: support@resellpoint.cc',
            p3: 'Прием посылок: 5-ый Донской проезд 15с7, Москва. Время работы 14:00 - 18:00 ежедневно. Предварительно позвоните или напишите нам.',
            p4: 'Полное наименование организации: Общество с ограниченной ответственностью “РЕСЕЛЛПОИНТ” / “RESELLPOINT” LLC',
            p5: 'Адрес ПВЗ СДЭК: г. Москва, Ул. Гагаринский р-н, 2к1 (Код ПВЗ: MSK362)',
            p6: 'ОГРН: 1187847219892',
            p7: 'ИНН: 7811702969',
            p8: 'КПП: 781101901',
            p9: 'Юридический адрес: г. Санкт-Петербург, Хрустальная ул., 14. Телефон +7 (495) 006-92-39',

            filtersLabel: "Фильтры",
            hideFilters: "Скрыть фильтры",
            resetFilters: 'Сбросить фильтры',
            filterSize: 'Размер',
            filterModels: 'Модели',
            filterShowRes: 'Показать результаты',
            filtersSearch: 'Поиск',

            delAndReturns1: "Процесс доставки состоит из 4 этапов",
            delAndReturns2: "- Принятие заказа;",
            delAndReturns3: "- Обработка заказа (проверка целостности и оригинальности);",
            delAndReturns4: "- Отправка заказа;",
            delAndReturns5: "- Предоставление покупателю трек номера для отслеживания посылки, а также декларации.",
            delAndReturns6: "Расчёт сроков доставки происходит индивидуально и зависит от вашей страны, уточняйте у администрации сайта.",
            delAndReturns7: "Доставка осуществляется по всему миру, с некоторыми исключениями.",
            delAndReturns8: "Компания ResellPoint несёт полную ответственность за ваш заказ и его сохранность.",

            faqAnsHeader1: "1. Куда мне нужно отправить мою вещь после подтверждения покупки?",
            faqAns1p1: "Посылку необходимо отправить курьерской службой СДЭК в пункт выдачи по адресу:",
            faqAns1p2: "г. Москва, Ул. Гагаринский р-н, 2к1 (Код ПВЗ: MSK362) +7 (495) 006-92-39",
            faqAns1p3: "Если вы проживаете в другой стране,то обращайтесь к администрации сайта и действуйте по их указаниям.",
            faqAns1p4: "Также вы можете привезти вещь в офис самостоятельно в наш офис по адресу: г. Москва, Варшавское шоссе 1с1. Бизнес-центр “W PLAZA”, красное кирпичное здание. Вещь можно оставить в любое время на ресепшн бизнес-центра. Пожалуйста, вложите в коробку лист с Вашим e-mail и номером лота.",
            faqAns1p5: "Если отправляете кроссовки, не забудьте, пожалуйста, позаботиться об упаковке, чтобы коробка не повредилась в процессе транспортировки.",
            faqAns1p6: "Если вы находитесь в Москве, вы можете принести кроссовки лично к нам в офис. Для этого напишите нам на почту support@resellpoint.cc с пометкой «Хочу передать кроссовки лично». В ответном письме мы отправим вам адрес и время, в которое мы сможем принять ваш товар.",
            faqAnsHeader2: "2. Я считаю, что мне прислали фейк, что делать?",
            faqAns2p1: "В случае если вы уверены, что купленная вами на платформе вещь пришла неоригинальная, вы можете написать нам об этом на почту support@resellpoint.cc и отправить кроссовки обратно в наш офис. Мы ведем базу с фотографиями всех проданных кроссовок, и после того, как убедимся, что это именно те кроссовки, которые мы вам выслали, мы проведем повторную экспертизу на оригинальность. Если кроссовки действительно окажутся неоригинальными, мы возместим вам полную стоимость кроссовок и все затраты на доставку.",
            faqAnsHeader3: "3. В какие регионы вы осуществляете доставку?",
            faqAns3p1: "Доставка осуществляется по всему миру без ограничений.",
            faqAnsHeader4: "4. Будет ли приложение для телефонов?",
            faqAns4p1: "Да, работа над приложением уже ведется, однако на данный момент сервис доступен только в формате сайта по адресу https://resellpoint.cc/",
            faqAnsHeader5: "5. Сколько будет длиться доставка?",
            faqAns5p1: "Количество дней доставки уточняйте у администратора",

            linkInst1: 'Магазин в инстаграме',
            linkInst2: 'Инстаграм для покупок',
            linkInstVk3: 'Новости кроссовок',
            linkInst4: 'Личная страница',
            linkInst5: 'Личная страница',

            sizeHeader: 'Доступные размеры',
            sizeHeaderAdmin: 'Цену уточните у администратора',
            avaluableSizes: 'Для покупки свяжитесь с администратором.',

            feedbackHeader: "Отзывы покупателей",
            feedbackp1: "Дорогие друзья, Resell Point работает для вас уже на протяжении более одного года. Мы дорожим своей репутацией и всегда работаем ради клиентов. Мы всегда можем договориться о цене, рассрочке и вопросах доставки. Мы даем вам полную гарантию защиты вашей посылки и гарантию оригинальности, все кроссовки проверяются на оригинальность и покупаются только в официальных брендовых магазинах.",
            feedbackp2: "Вы можете оставить отзыв на нашем сайте, для этого свяжитесь с администрацией сайта и мы все опубликуем, спасибо!",
            feedbackp3: "Для того чтобы оставить отзыв напишите нам на почту ",
            feedbackp4: " с отзывом и мы все опубликуем",

            faqPaymentP1: "Для покупки товара и его дальнейшей оплаты обращайтесь к администратору."
        }

        this.pagesWrapper = newText
    }

    translateToUS() {
        this.currentLanguage = 'en'

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
            deliveryAndReturns: 'Delivery and returns',
            support: 'Support',
            faqMenuTitle: "FAQ",

            emptyCatalogText: 'Oops, nothing here yet. Expect more stock soon.',
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
            mainTesserLine2: 'Fast delivery worldwide',
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
            mainSocialMedia: 'in Instagram or Vkontakte',
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

            aboutReseller: "Hi, I've been in the shoes and apparel business for over 3 years and I'm glad to welcome you to my store website. This is where you can find original shoes at a great price, with express delivery worldwide. You can contact any questions using our contacts listed on our website, we also have a separate category of answers to questions (FAQ) ",
            p1: "We're always in touch! We are ready to answer your questions daily from 10:00 to 23:30 (Moscow time).",
            p2: 'Our mail: support@resellpoint.cc',
            p3: 'Reception of parcels: 5th Donskoy proezd 15с7, Moscow. Opening hours 14:00 - 18:00 daily. Please call or email us in advance.',
            p4: 'Full name of the organization: Limited Liability Company “RESELLPOINT” / “RESELLPOINT” LLC',
            p5: 'Address of PVZ SDEK: Moscow, st. Gagarinsky district, 2k1 (PVZ code: MSK362)',
            p6: 'BIN: 1187847219892',
            p7: 'TIN: 7811702969',
            p8: 'checkpoint: 781101901',
            p9: 'Legal address: St. Petersburg, Khrustalnaya st., 14. Telephone +7 (495) 006-92-39',
            filtersLabel: "Filters",
            hideFilters: "Hide filters",
            resetFilters: 'Reset filters',
            filterSize: 'Size',
            filterModels: 'Models',
            filterShowRes: 'Show results',
            filtersSearch: 'Search',

            delAndReturns1: "The delivery process consists of 4 stages",
            delAndReturns2: "- Order acceptance;",
            delAndReturns3: "- Order processing (check integrity and originality);",
            delAndReturns4: "- Sending order;",
            delAndReturns5: "- Providing the buyer with a tracking number for tracking the parcel, as well as a declaration.",
            delAndReturns6: "Delivery time is calculated individually and depends on your country, check with the site administration.",
            delAndReturns7: "Shipping is worldwide, with some exceptions.",
            delAndReturns8: "ResellPoint is solely responsible for your order and its safety.",

            faqAnsHeader1: "1. Where should I ship my item after purchase confirmation?",
            faqAns1p1: "The package must be sent by CDEK courier service to the pickup point at:",
            faqAns1p2: "Moscow, Gagarinsky district st., 2k1 (PVZ code: MSK362) +7 (495) 006-92-39",
            faqAns1p3: "If you live in another country, please contact the site administration and follow their instructions.",
            faqAns1p4: "Also, you can bring the item to the office on your own to our office at the address: Moscow, Varshavskoye shosse 1с1. Business center “W PLAZA”, red brick building. You can leave the item at any time at the reception of the business center. Please , put a sheet with your e-mail and lot number in the box.",
            faqAns1p5: "If you're shipping sneakers, please remember to take care of the packaging so that the box doesn't get damaged in transit.",
            faqAns1p6: "If you are in Moscow, you can bring the sneakers to our office in person. To do this, write to us at support@resellpoint.cc with the note 'I want to personally deliver the sneakers.' In a reply email, we will send you the address and time in which we can accept your goods.",
            faqAnsHeader2: "2. I think they sent me a fake, what should I do?",
            faqAns2p1: "If you are sure that the item you bought on the platform is non-original, you can write to us at support@resellpoint.cc and send the sneakers back to our office. We maintain a database with photos of all sneakers sold, and after Once we are sure it is the exact shoe we sent you, we will re-evaluate it for originality.",
            faqAnsHeader3: "3. What regions do you ship to?",
            faqAns3p1: "Shipping is worldwide with no restrictions.",
            faqAnsHeader4: "4. Will there be an app for phones?",
            faqAns4p1: "Yes, work on the application is already underway, but at the moment the service is only available in the site format at https://resellpoint.cc/",
            faqAnsHeader5: "5. How long will the delivery take?",
            faqAns5p1: "Check with the administrator for the number of delivery days",

            linkInst1: 'Shop on Instagram',
            linkInst2: 'Instagram for shopping',
            linkInstVk3: 'Sneakers News',
            linkInst4: 'Personal page',
            linkInst5: 'Personal page',

            sizeHeader: 'Available sizes',
            sizeHeaderAdmin: 'Check with admin for pricing',
            avaluableSizes: 'Contact administrator to purchase.',

            feedbackHeader: "Customer Feedback",
            feedbackp1: "Dear friends, Resell Point has been working for you for more than one year. We value our reputation and always work for the sake of customers. We can always agree on the price, installments and delivery issues. We give you a full guarantee of the protection of your package and a guarantee originality, all sneakers are checked for originality and are bought only in official branded stores.",
            feedbackp2: "You can leave a review on our site, to do this, contact the site administration and we will publish everything, thanks!",
            feedbackp3: "To leave a review, email us ",
            feedbackp4: " with feedback and we will publish everything",

            faqPaymentP1: "To purchase an item and pay for it, please contact the administrator.",
        }

        this.pagesWrapper = newText
    }

    translateToNL() {
        this.currentLanguage = 'nl'

        const newText: PagesText = {
            catalog: 'Catalogus',
            reviews: 'Beoordelingen',
            guarantees: 'Garanties',
            contacts: 'Contacten',
            shoues: 'Schoenen',
            clothes: 'Kleding',
            accessories: 'Accessoires',
            menuText1: 'Mis nooit meer een belangrijke gebeurtenis.',
            menuText2: 'Volg onze social media netwerken.',
            searchPlaceholder: 'Voer modelnaam in',
            platform: 'Platform',
            howItWorks: 'Hoe het werkt',
            pay: 'Betaling',
            deliveryAndReturns: 'Bezorgen en retourneren',
            support: 'Ondersteuning',
            faqMenuTitle: "FAQ",
    
            emptyCatalogText: 'Oeps, hier nog niets. Verwacht binnenkort meer voorraad.',
            modelVendorCode: 'Artikel',
            modelModel: 'Model',
            modelBrand: 'Merk',
            modelColoring: 'Coloring',
            modelReliaseDate: 'Releasedatum',
            modelPayButton: 'Kopen',
            modelYouWillLike: 'Je zult het leuk vinden',
            learnMore: 'Meer',
            
            mainTitle: 'Meest veilige marktplaats',
            mainSubtitle: 'Originele limited edition schoenen, kleding en accessoires',
            mainCatalogButton: 'Bekijk catalogus',
            mainNewCarouselTitle: 'Nieuw',
            mainTeaserTitle: 'Het veiligste platform om zeldzame kleding, schoenen en accessoires te kopen en verkopen.',
            mainTesserLine1: 'Alleen originele producten',
            mainTesserLine2: 'Snelle levering wereldwijd',
            mainTesserLine3: 'Veiligheid en risicovrij',
            mainHaveAQuestion: 'Heeft u nog vragen?',
    
            mainHowItWorks: 'Hoe de site werkt',
            mainGuarantee: 'Originaliteitsgaranties',
            mainAnswers: 'Antwoorden op veelgestelde vragen',
            mainContacts: 'Contactgegevens',
            mainDocuments: 'Officiële documenten',
    
            mainMobileWeHaveAns: 'We hebben waarschijnlijk al het antwoord op je vraag:',
            mainMobileFAQ: 'Bekijk veelgestelde vragen',
            mainMail: 'Als je vragen of verzoeken hebt, kun je ons altijd mailen',
            mainOr: 'of',
            mainSocialMedia: 'in Instagram of Vkontakte',
            faqTitle: 'F. AQ',
            faqNotFindAns: 'Niet gevonden wat u zocht?',
            faqContactViaEmail: 'E-mail ons',
    
            faqDocTitle: 'Aanbieding',
            faqDocLink1: 'Agentschapsovereenkomst',
            faqDocLink2: 'Licentieovereenkomst',
            faqDocLink3: 'Verkoopregels',
            faqDocLink4: 'Beleid verwerking persoonsgegevens',
    
            faqDocGuaranteeP1: `Alle artikelen die bij het verkooppunt zijn gekocht, zijn origineel en nieuw. Elk item gaat door ons kantoor, waar:
            door twee onafhankelijke teams getest op echtheid en geen gebruikssporen. Na een succesvolle
            alle controles doorstaan, hechten we een speciaal 'doorverkooppunt geverifieerd' zegel aan elk item, dat:
            is een garantie voor de originaliteit van de goederen.`,
            faqDocGuaranteeP2: "Alle dingen worden gecontroleerd door echte professionals - het team",
            faqDocGuaranteeP3: ". We zijn zeer zorgvuldig over onze werken zodat u zeker weet dat u een echt product koopt.",
            faqDocGuaranteeP4: `Als u denkt een namaakproduct te hebben ontvangen, neem dan onmiddellijk contact met ons op. We
            we beschouwen elk beroep afzonderlijk, als het product een "doorverkooppunt" -zegel heeft
            geverifieerd". Als u twijfelt aan de echtheid van de ontvangen goederen, kunt u deze naar ons terugsturen op:
            dubbelcheck met uitleg wat volgens jou precies op de niet-originele goederen duidt. Als
            een tweede controle zal aantonen dat het product echt nep is - we zullen uw aankoopprijs volledig terugbetalen
            volume, evenals alle kosten vergoeden voor het verzenden van de goederen voor hercontrole.`,
    
            aboutReseller: `Hallo, ik ben al meer dan 3 jaar actief in de schoenen- en kledingbranche en ik ben blij u te mogen verwelkomen op mijn winkelwebsite. Hier vindt u originele schoenen voor een geweldige prijs, met wereldwijde expreslevering." U kunt met al uw vragen contact opnemen via onze contactpersonen die op onze website staan ​​vermeld, we hebben ook een aparte categorie met antwoorden op vragen (FAQ) "`,
            p1: 'We hebben altijd contact! Wij staan dagelijks van 10:00 tot 23:30 uur (Moskou tijd) klaar om uw vragen te beantwoorden.',
            p2: 'Onze mail: support@resellpoint.cc',
            p3: 'Ontvangst van pakketten: 5e Donskoy proezd 15с7, Moskou. Dagelijks geopend van 14:00 - 18:00 uur. Bel of mail ons dan vooraf.',
            p4: 'Volledige naam van de organisatie: Limited Liability Company "RESELLPOINT" / "RESELLPOINT" LLC',
            p5: 'Adres van PVZ SDEK: Moskou, st. Gagarinsky-district, 2k1 (PVZ-code: MSK362)',
            p6: 'BIN: 1187847219892',
            p7: 'TIN: 7811702969',
            p8: 'controlepunt: 781101901',
            p9: 'Juridisch adres: St. Petersburg, Khrustalnaya st., 14. Telefoon +7 (495) 006-92-39',

            filtersLabel: "Filters",
            hideFilters: "Verberg filters",
            resetFilters: 'Reset filters',
            filterSize: 'Maat',
            filterModels: 'Modellen',
            filterShowRes: 'Toon resultaten',
            filtersSearch: 'Zoeken',

            delAndReturns1: "Het leveringsproces bestaat uit 4 fasen",
            delAndReturns2: "- Orderacceptatie;",
            delAndReturns3: "- Orderverwerking (controleer integriteit en originaliteit);",
            delAndReturns4: "- Bestelling verzenden;",
            delAndReturns5: "- De koper voorzien van een trackingnummer voor het volgen van het pakket, evenals een verklaring.",
            delAndReturns6: "De levertijd wordt individueel berekend en is afhankelijk van uw land, neem contact op met de sitebeheerder.",
            delAndReturns7: "Verzending is wereldwijd, met enkele uitzonderingen.",
            delAndReturns8: "ResellPoint is als enige verantwoordelijk voor uw bestelling en de veiligheid ervan.",

            faqAnsHeader1: "1. Waar moet ik mijn artikel naar toe sturen na aankoopbevestiging?",
            faqAns1p1: "Het pakket moet door de CDEK-koerierdienst worden verzonden naar het afhaalpunt op:",
            faqAns1p2: "Moskou, Gagarinsky district st., 2k1 (PVZ-code: MSK362) +7 (495) 006-92-39",
            faqAns1p3: "Als u in een ander land woont, neem dan contact op met de sitebeheerder en volg hun instructies.",
            faqAns1p4: `U kunt het artikel ook zelf naar kantoor brengen naar ons kantoor op het adres: Moskou, Varshavskoye shosse 1с1. Zakencentrum "W PLAZA", rood bakstenen gebouw. U kunt het artikel op elk moment achterlaten bij de receptie van het zakencentrum. Stop alstublieft een blad met uw e-mail en lotnummer in de doos.`,
            faqAns1p5: "Als je sneakers verzendt, denk er dan aan om voor de verpakking te zorgen, zodat de doos tijdens het transport niet beschadigd raakt.",
            faqAns1p6: `Als je in Moskou bent, kun je de sneakers persoonlijk naar ons kantoor brengen. Schrijf ons hiervoor op support@resellpoint.cc met de opmerking "Ik wil de sneakers persoonlijk afleveren." In een antwoord-e-mail , sturen wij u het adres en het tijdstip waarop wij uw goederen kunnen accepteren.`,
            faqAnsHeader2: "2. Ik denk dat ze me een nep hebben gestuurd, wat moet ik doen?",
            faqAns2p1: "Als je zeker weet dat het item dat je op het platform hebt gekocht niet-origineel is, kun je ons schrijven op support@resellpoint.cc en de sneakers terugsturen naar ons kantoor. We houden een database bij met foto's van alle verkochte sneakers , en nadat we er zeker van zijn dat het de exacte schoen is die we je hebben gestuurd, zullen we deze opnieuw beoordelen op originaliteit",
            faqAnsHeader3: "3. Naar welke regio's verzenden jullie?",
            faqAns3p1: "Verzending is wereldwijd zonder beperkingen.",
            faqAnsHeader4: "4. Komt er een app voor telefoons?",
            faqAns4p1: "Ja, er wordt al aan de applicatie gewerkt, maar op dit moment is de service alleen beschikbaar in het siteformaat op https://resellpoint.cc/",
            faqAnsHeader5: "5. Hoe lang duurt de levering?",
            faqAns5p1: "Informeer bij de beheerder voor het aantal bezorgdagen",

            linkInst1: 'Winkelen op Instagram',
            linkInst2: 'Instagram om te winkelen',
            linkInstVk3: 'Sneakers Nieuws',
            linkInst4: 'Persoonlijke pagina',
            linkInst5: 'Persoonlijke pagina',

            sizeHeader: 'Beschikbare maten',
            sizeHeaderAdmin: 'Neem contact op met admin voor prijzen',
            avaluableSizes: 'Neem contact op met de beheerder om te kopen.',

            feedbackHeader: "Klantenfeedback",
            feedbackp1: "Beste vrienden, Resell Point werkt al meer dan een jaar voor u. We waarderen onze reputatie en werken altijd in het belang van klanten. We kunnen het altijd eens worden over de prijs, termijnen en leveringskwesties. We geven u een volledig garantie voor de bescherming van uw pakket en een garantie voor originaliteit, alle sneakers worden gecontroleerd op originaliteit en worden alleen gekocht in officiële merkwinkels.",
            feedbackp2: "U kunt een recensie achterlaten op onze site, hiervoor neemt u contact op met de sitebeheerder en wij zullen alles publiceren, bedankt!",
            feedbackp3: "E-mail ons om een beoordeling achter te laten",
            feedbackp4: "met feedback en we zullen alles publiceren",

            faqPaymentP1: "Neem contact op met de beheerder om een item te kopen en te betalen.",
        }

        this.pagesWrapper = newText

    }

    translateToFR() {
        this.currentLanguage = 'fr'

        const newText: PagesText = {
            catalog: 'Catalogue',
            reviews: 'Avis',
            guarantees: 'Garanties',
            contacts: 'Contacts',
            shoues: 'Chaussures',
            clothes: 'Vêtements',
            accessories : 'Accessoires',
            menuText1: 'Ne manquez jamais un événement important.',
            menuText2: 'Suivez nos réseaux sociaux réseaux.',
            searchPlaceholder: 'Entrez le nom du modèle',
            platform: 'Plate-forme',
            howItWorks : 'Comment ça marche',
            pay: 'Paiement',
            deliveryAndReturns: 'Livraison et retours',
            support: 'Soutien',
            faqMenuTitle: "FAQ",
    
            emptyCatalogText: 'Oups, rien ici pour le moment. Attendez-vous à plus de stock bientôt.',
            modelVendorCode: 'Article',
            modelModel: 'Modèle',
            modelBrand: 'Marque',
            modelColoring: 'Coloration',
            modelReliaseDate: 'Date de sortie',
            modelPayButton: 'Acheter',
            modelYouWillLike: 'Tu vas aimer',
            learnMore: 'Plus',
    
            mainTitle: 'Place de marché la plus sécurisée',
            mainSubtitle: 'Chaussures, vêtements et accessoires originaux en édition limitée',
            mainCatalogButton: 'Voir le catalogue',
            mainNewCarouselTitle: 'Nouveau',
            mainTeaserTitle: 'La plateforme la plus sûre pour acheter et vendre des vêtements, chaussures et accessoires rares.',
            mainTesserLine1: 'Uniquement des produits originaux',
            mainTesserLine2: 'Livraison rapide dans le monde entier',
            mainTesserLine3: 'Sécurité et sans risque',
            mainHaveAQuestion: 'Vous avez des questions?',
    
            mainHowItWorks: 'Comment fonctionne le site',
            mainGuarantee: "Garanties d'originalité",
            mainAnswers: 'Réponses aux questions fréquemment posées',
            mainContacts: 'Coordonnées',
            mainDocuments: 'Documents officiels',
    
            mainMobileWeHaveAns: 'Nous avons probablement déjà la réponse à votre question :',
            mainMobileFAQ: 'Afficher la F.A.Q.',
            mainMail: 'Si vous avez des questions ou des demandes, vous pouvez toujours nous envoyer un e-mail',
            mainOr: 'ou',
            mainSocialMedia: 'dans Instagram ou Vkontakte',
            faqTitle: 'F.A.Q.',
            faqNotFindAns: "Vous n'avez pas trouvé ce que vous cherchiez?",
            faqContactViaEmail: 'Envoyez-nous un e-mail',
    
            faqDocTitle: 'Offre',
            faqDocLink1: "Contrat d'agence",
            faqDocLink2: 'Contrat de licence',
            faqDocLink3: 'Règles de vente',
            faqDocLink4: 'Politique de traitement des données personnelles',
    
            faqDocGuaranteeP1: `Tous les articles achetés au point de revente sont originaux et neufs. Chaque article passe par notre bureau, où
            testé par deux équipes indépendantes pour l'authenticité et aucun signe d'usure. Après un succès
            passant toutes les vérifications, nous attachons un sceau spécial "vérifié au point de revente" à chaque article, qui
            est une garantie de l'originalité de la marchandise.`,
            faqDocGuaranteeP2: `Tout est vérifié par de vrais professionnels - l'équipe `,
            faqDocGuaranteeP3: `. Nous sommes très méticuleux sur nos
            travailler pour que vous puissiez être sûr que vous achetez un produit authentique.`,
            faqDocGuaranteeP4: `Si vous pensez avoir reçu un produit contrefait, veuillez nous contacter immédiatement. Nous
            nous examinons chaque appel individuellement, si le produit a un sceau "point de revente"
            vérifié". Si vous doutez de l'authenticité de la marchandise reçue, vous pouvez nous la renvoyer à
            double-vérification avec une explication de ce qui, à votre avis, indique exactement les marchandises non originales. Si
            une deuxième vérification montrera que le produit est vraiment faux - nous vous rembourserons intégralement le prix d'achat
            volume, ainsi que rembourser tous les frais d'envoi des marchandises pour un nouveau contrôle.`,
    
            aboutReseller: `"Bonjour, je suis dans le secteur de la chaussure et de l'habillement depuis plus de 3 ans et je suis heureux de vous accueillir sur le site de ma boutique. C'est ici que vous pouvez trouver des chaussures originales à un prix avantageux, avec une livraison express dans le monde entier. Vous pouvez contacter toutes les questions en utilisant nos contacts répertoriés sur notre site Web, nous avons également une catégorie distincte de réponses aux questions (FAQ)"`,
            p1 : `Nous sommes toujours en contact! Nous sommes prêts à répondre à vos questions tous les jours de 11h00 à 22h00 (heure de Moscou).`,
            p2 : 'Notre mail : support@resellpoint.cc',
            p3 : `Réception des colis : 5e Donskoy proezd 15с7, Moscou. Heures d'ouverture 14h00 - 18h00 tous les jours. Veuillez nous appeler ou nous envoyer un e-mail à l'avance.`,
            p4: `Nom complet de l'organisation: Société à responsabilité limitée "RESELLPOINT" / "RESELLPOINT" LLC`,
            p5 : 'Adresse de PVZ SDEK : Moscou, st. Quartier Gagarinsky, 2k1 (code PVZ : MSK362)',
            p6: 'BIN: 1187847219892',
            p7: 'TIN: 7811702969',
            p8: 'point de contrôle: 781101901',
            p9: 'Adresse légale: Saint-Pétersbourg, rue Khrustalnaya, 14. Téléphone +7 (495) 006-92-39',

            filtersLabel: "Filtres",
            hideFilters: "Masquer les filtres",
            resetFilters: 'Réinitialiser les filtres',
            filterSize: 'Taille',
            filterModels: 'Modèles',
            filterShowRes: 'Afficher les résultats',
            filtersSearch: 'Rechercher',

            delAndReturns1: "Le processus de livraison se compose de 4 étapes",
            delAndReturns2: "-Acceptation de la commande;",
            delAndReturns3: "-Traitement de la commande (vérifier l'intégrité et l'originalité);",
            delAndReturns4: "- Envoi de la commande;",
            delAndReturns5: "- Fournir à l'acheteur un numéro de suivi pour le suivi du colis, ainsi qu'une déclaration.",
            delAndReturns6: "Le délai de livraison est calculé individuellement et dépend de votre pays, vérifiez auprès de l'administration du site.",
            delAndReturns7: "La livraison s'effectue dans le monde entier, à quelques exceptions près.",
            delAndReturns8: "ResellPoint est seul responsable de votre commande et de sa sécurité.",

            faqAnsHeader1: "1. Où dois-je expédier mon article après confirmation d'achat?",
            faqAns1p1: "Le colis doit être envoyé par le service de messagerie CDEK au point de retrait à:",
            faqAns1p2: "Moscou, rue Gagarinsky, 2k1 (code PVZ: MSK362) +7 (495) 006-92-39",
            faqAns1p3: "Si vous habitez dans un autre pays, veuillez contacter l'administration du site et suivez leurs instructions.",
            faqAns1p4: `Vous pouvez également apporter vous-même l'article au bureau à notre bureau à l'adresse: Moscou, Varshavskoye shosse 1с1. Centre d'affaires "W PLAZA", bâtiment en briques rouges. Vous pouvez laisser l'article à tout moment au réception du centre d'affaires. Veuillez mettre une feuille avec votre e-mail et votre numéro de lot dans la boîte.`,
            faqAns1p5: "Si vous expédiez des baskets, n'oubliez pas de prendre soin de l'emballage afin que la boîte ne soit pas endommagée pendant le transport.",
            faqAns1p6: `Si vous êtes à Moscou, vous pouvez apporter les baskets à notre bureau en personne. Pour ce faire, écrivez-nous à support@resellpoint.cc avec la note "Je veux livrer personnellement les baskets." Dans un e-mail de réponse , nous vous enverrons l'adresse et l'heure auxquelles nous pouvons accepter vos marchandises.`,
            faqAnsHeader2: "2. Je pense qu'ils m'ont envoyé un faux, que dois-je faire?",
            faqAns2p1: `Si vous êtes sûr que l'article que vous avez acheté sur la plateforme n'est pas original, vous pouvez nous écrire à support@resellpoint.cc et renvoyer les baskets à notre bureau. Nous maintenons une base de données avec des photos de toutes les baskets vendues , et après Une fois que nous sommes sûrs qu'il s'agit de la chaussure exacte que nous vous avons envoyée, nous la réévaluerons pour son originalité.`,
            faqAnsHeader3: "3. Dans quelles régions expédiez-vous?",
            faqAns3p1: "La livraison s'effectue dans le monde entier sans aucune restriction.",
            faqAnsHeader4: "4. Y aura-t-il une application pour les téléphones?",
            faqAns4p1: "Oui, le travail sur l'application est déjà en cours, mais pour le moment le service n'est disponible qu'au format site à https://resellpoint.cc/",
            faqAnsHeader5: "5. Combien de temps prendra la livraison ?",
            faqAns5p1: "Vérifiez auprès de l'administrateur le nombre de jours de livraison",

            linkInst1: 'Acheter sur Instagram',
            linkInst2: 'Instagram pour faire du shopping',
            linkInstVk3: 'Nouvelles des baskets',
            linkInst4: 'Page personnelle',
            linkInst5: 'Page personnelle',

            sizeHeader: 'Tailles disponibles',
            sizeHeaderAdmin: `Vérifiez auprès de l'administrateur pour connaître les prix`,
            avaluableSizes: `Contacter l'administrateur pour acheter.`,

            feedbackHeader: "Commentaires clients",
            feedbackp1: "Chers amis, Resell Point travaille pour vous depuis plus d'un an. Nous apprécions notre réputation et travaillons toujours pour le bien des clients. Nous pouvons toujours nous mettre d'accord sur le prix, les versements et les problèmes de livraison. Nous vous donnons un garantie de la protection de votre colis et une garantie d'originalité, toutes les baskets sont contrôlées pour leur originalité et sont achetées uniquement dans les magasins officiels de la marque.",
            feedbackp2: "Vous pouvez laisser un avis sur notre site, pour cela, contactez l'administration du site et nous publierons tout, merci !",
            feedbackp3: "Pour laisser un avis, envoyez-nous un e-mail",
            feedbackp4: "avec des commentaires et nous publierons tout",

            faqPaymentP1: "Pour acheter un article et le payer, veuillez contacter l'administrateur.",
        }

        this.pagesWrapper = newText
    }

    translateToIT() {
        this.currentLanguage = 'it'

        const newText: PagesText = {
            catalog: 'Catalogo',
            reviews: 'Recensioni',
            guarantees: 'Garanzie',
            contacts: 'Contatti',
            shoues: 'Scarpe',
            clothes: 'Vestiti',
            accessories: 'Accessori',
            menuText1: 'Non perdere mai un evento importante.',
            menuText2: 'Segui i nostri social media reti.',
            searchPlaceholder: 'Inserisci il nome del modello',
            platform: 'Piattaforma',
            howItWorks: 'Come funziona',
            pay: 'Pagamento',
            deliveryAndReturns: 'Consegna e Resi',
            support: 'Supporto',
            faqMenuTitle: "FAQ",
    
            emptyCatalogText: 'Oops, ancora niente qui. Aspettati più stock presto.',
            modelVendorCode: 'Articolo',
            modelModel: 'Modello',
            modelBrand: 'Marca',
            modelColoring: 'Coloring',
            modelReliaseDate: 'Data di rilascio',
            modelPayButton: 'Compra',
            modelYouWillLike: 'Ti piacerà',
            learnMore: 'Altro',
    
            mainTitle: 'Mercato più sicuro',
            mainSubtitle: 'Scarpe, vestiti e accessori originali in edizione limitata',
            mainCatalogButton: 'Visualizza catalogo',
            mainNewCarouselTitle: 'Nuovo',
            mainTeaserTitle: 'La piattaforma più sicura per acquistare e vendere vestiti, scarpe e accessori rari.',
            mainTesserLine1: 'Solo prodotti originali',
            mainTesserLine2: 'Consegna rapida in tutto il mondo',
            mainTesserLine3: 'Sicurezza e senza rischi',
            mainHaveAQuestion: 'Qualche domanda?',
    
            mainHowItWorks: 'Come funziona il sito',
            mainGuarantee: 'Garanzie di originalità',
            mainAnswers: 'Risposte alle domande frequenti',
            mainContacts: 'Informazioni di contatto',
            mainDocuments: 'Documenti Ufficiali',
    
            mainMobileWeHaveAns: "Probabilmente abbiamo già la risposta alla tua domanda:",
            mainMobileFAQ: 'Visualizza F.A.Q.',
            mainMail: `Se hai domande o richieste, puoi sempre inviarci un'e-mail`,
            mainOr: 'o',
            mainSocialMedia: 'in Instagram o Vkontakte',
            faqTitle: 'F. AQ',
            faqNotFindAns: 'Non hai trovato quello che stavi cercando?',
            faqContactViaEmail: `Inviaci un'e-mail`,
    
            faqDocTitle: 'Offerta',
            faqDocLink1: 'Contratto di agenzia',
            faqDocLink2: 'Contratto di licenza',
            faqDocLink3: 'Regole di vendita',
            faqDocLink4: 'Politica sul trattamento dei dati personali',
    
            faqDocGuaranteeP1: `Tutti gli articoli acquistati dal punto di rivendita sono originali e nuovi. Ogni articolo passa attraverso il nostro ufficio, dove
            testato da due team indipendenti per verificarne l'autenticità e l'assenza di segni di usura. Dopo un successo
            superati tutti i controlli, applichiamo ad ogni articolo uno speciale sigillo "resell point verificato", che
            è garanzia dell'originalità della merce.`,
            faqDocGuaranteeP2: `Tutte le cose sono controllate da veri professionisti: il team`,
            faqDocGuaranteeP3: `. Siamo molto meticolosi riguardo al nostro
            lavorare in modo da poter essere sicuri di acquistare un prodotto genuino.`,
            faqDocGuaranteeP4: `Se ritieni di aver ricevuto un prodotto contraffatto, ti preghiamo di contattarci immediatamente. Noi
            consideriamo ogni ricorso individualmente, se il prodotto ha un sigillo "punto di rivendita".
            verificato”. Se dubiti dell'autenticità della merce ricevuta, puoi rispedircela all'indirizzo
            ricontrollando con una spiegazione di cosa esattamente, a tuo avviso, indica la merce non originale. Se
            un secondo controllo mostrerà che il prodotto è davvero falso - ti rimborseremo per intero il prezzo di acquisto
            volume, nonché rimborsare tutti i costi per l'invio della merce per il nuovo controllo.`,
    
            aboutReseller: "Ciao, sono nel settore delle scarpe e dell'abbigliamento da oltre 3 anni e sono lieto di darti il benvenuto sul sito Web del mio negozio. Qui puoi trovare scarpe originali a un ottimo prezzo, con consegna espressa in tutto il mondo. Puoi contattare qualsiasi domanda utilizzando i nostri contatti elencati sul nostro sito Web, abbiamo anche una categoria separata di risposte alle domande (FAQ) ",
            p1: 'Siamo sempre in contatto! Siamo pronti a rispondere alle tue domande tutti i giorni dalle 10:00 alle 23:30 (ora di Mosca).',
            p2: 'La nostra posta: support@resellpoint.cc',
            p3: `Ricezione dei pacchi: 5° Donskoy proezd 15с7, Mosca. Orario di apertura 14:00 - 18:00 tutti i giorni. Si prega di chiamare o inviare un'e-mail in anticipo.`,
            p4: `Nome completo dell'organizzazione: Società a responsabilità limitata “RESELLPOINT” / “RESELLPOINT” LLC`,
            p5: 'Indirizzo di PVZ SDEK: Mosca, st. Distretto di Gagarinsky, 2k1 (codice PVZ: MSK362)',
            p6: 'CESTINO: 1187847219892',
            p7: 'CIF: 7811702969',
            p8: 'punto di controllo: 781101901',
            p9: 'Indirizzo legale: St. Petersburg, Khrustalnaya st., 14. Telefono +7 (495) 006-92-39',

            filtersLabel: "Filtri",
            hideFilters: "Nascondi filtri",
            resetFilters: 'Ripristina filtri',
            filterSize: 'Size',
            filterModels: 'Modelli',
            filterShowRes: 'Mostra risultati',
            filtersSearch: 'Cerca',

            delAndReturns1: "Il processo di consegna si compone di 4 fasi",
            delAndReturns2: "- Accettazione dell'ordine;",
            delAndReturns3: "- Elaborazione dell'ordine (verifica integrità e originalità);",
            delAndReturns4: "- Invio ordine;",
            delAndReturns5: "- Fornire all'acquirente un numero di tracciabilità per tracciare il pacco, nonché una dichiarazione.",
            delAndReturns6: "I tempi di consegna sono calcolati individualmente e dipendono dal tuo paese, verifica con l'amministrazione del sito.",
            delAndReturns7: "La spedizione è in tutto il mondo, con alcune eccezioni.",
            delAndReturns8: "ResellPoint è l'unico responsabile del tuo ordine e della sua sicurezza.",

            faqAnsHeader1: "1. Dove devo spedire il mio articolo dopo la conferma dell'acquisto?",
            faqAns1p1: "Il pacco deve essere inviato tramite il servizio di corriere CDEK al punto di ritiro a:",
            faqAns1p2: "Mosca, via del distretto di Gagarinsky, 2k1 (codice PVZ: MSK362) +7 (495) 006-92-39",
            faqAns1p3: "Se vivi in un altro paese, contatta l'amministrazione del sito e segui le loro istruzioni.",
            faqAns1p4: `Inoltre, puoi portare l'oggetto in ufficio da solo nel nostro ufficio all'indirizzo: Mosca, Varshavskoye shosse 1с1. Centro affari "W PLAZA", edificio in mattoni rossi. Puoi lasciare l'oggetto in qualsiasi momento presso il reception del business center. Per favore, metti un foglio con la tua e-mail e il numero di lotto nella casella.`,
            faqAns1p5: "Se spedisci scarpe da ginnastica, ricordati di curare l'imballaggio in modo che la scatola non venga danneggiata durante il trasporto.",
            faqAns1p6: `Se sei a Mosca, puoi portare le scarpe da ginnastica nel nostro ufficio di persona. Per farlo, scrivici a support@resellpoint.cc con la nota "Voglio consegnare personalmente le scarpe da ginnastica". In un'e-mail di risposta , ti invieremo l'indirizzo e l'ora in cui possiamo accettare la tua merce.`,
            faqAnsHeader2: "2. Penso che mi abbiano mandato un fake, cosa devo fare?",
            faqAns2p1: "Se sei sicuro che l'articolo che hai acquistato sulla piattaforma non sia originale, puoi scriverci a support@resellpoint.cc e rispedire le sneakers al nostro ufficio. Manteniamo un database con le foto di tutte le sneakers vendute , e dopo una volta che saremo sicuri che sia la scarpa esatta che ti abbiamo inviato, la valuteremo nuovamente per originalità",
            faqAnsHeader3: "3. In quali regioni spedite?",
            faqAns3p1: "La spedizione è in tutto il mondo senza restrizioni.",
            faqAnsHeader4: "4. Ci sarà un'app per i telefoni?",
            faqAns4p1: "Sì, il lavoro sull'applicazione è già in corso, ma al momento il servizio è disponibile solo nel formato del sito all'indirizzo https://resellpoint.cc/",
            faqAnsHeader5: "5. Quanto tempo ci vorrà per la consegna?",
            faqAns5p1: "Verifica con l'amministratore il numero di giorni di consegna",

            linkInst1: 'Acquista su Instagram',
            linkInst2: 'Instagram per lo shopping',
            linkInstVk3: 'Notizie sulle scarpe da ginnastica',
            linkInst4: 'Pagina personale',
            linkInst5: 'Pagina personale',

            sizeHeader: 'Taglie disponibili',
            sizeHeaderAdmin: "Verifica con l'amministratore per i prezzi",
            avaluableSizes: "Contatta l'amministratore per l'acquisto.",

            feedbackHeader: "Feedback dei clienti",
            feedbackp1: "Cari amici, Resell Point lavora per voi da più di un anno. Apprezziamo la nostra reputazione e lavoriamo sempre per il bene dei clienti. Possiamo sempre essere d'accordo su prezzo, rate e problemi di consegna. Vi diamo un'idea completa garanzia della protezione del tuo pacco e garanzia di originalità, tutte le sneakers sono controllate per l'originalità e vengono acquistate solo nei negozi ufficiali del marchio.",
            feedbackp2: "Puoi lasciare una recensione sul nostro sito, per farlo contatta l'amministrazione del sito e pubblicheremo tutto, grazie!",
            feedbackp3: "Per lasciare una recensione, inviaci un'e-mail",
            feedbackp4: "con feedback e pubblicheremo tutto",

            faqPaymentP1: "Per acquistare un articolo e pagarlo, contatta l'amministratore.",
        }

        this.pagesWrapper = newText
    }    
}