import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './app-catalog-page/accessories/accessories.component';
import { AppCatalogPageComponent } from './app-catalog-page/app-catalog-page.component';
import { AppShoesComponent } from './app-catalog-page/app-shoes/app-shoes.component';
import { ClothesComponent } from './app-catalog-page/clothes/clothes.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppModelComponent } from './app-model/app-model.component';
import { FaqContactsComponent } from './faq-page/faq-contacts/faq-contacts.component';
import { FaqDeliveryComponent } from './faq-page/faq-delivery/faq-delivery.component';
import { FaqDocumentsComponent } from './faq-page/faq-documents/faq-documents.component';
import { FaqFaqComponent } from './faq-page/faq-faq/faq-faq.component';
import { FaqGuaranteeComponent } from './faq-page/faq-guarantee/faq-guarantee.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FaqPaymentComponent } from './faq-page/faq-payment/faq-payment.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'catalog', component: AppCatalogPageComponent, children: [
    {path: 'shoes', component: AppShoesComponent},
    {path: 'clothes', component: ClothesComponent},
    {path: 'accessories', component: AccessoriesComponent},  
  ]},
  {path: 'model/:id', component: AppModelComponent},
  {path: 'faq', component: FaqPageComponent, children: [
    {path: 'contacts', component: FaqContactsComponent},
    {path: 'delivery', component: FaqDeliveryComponent},
    {path: 'answers', component: FaqFaqComponent},
    {path: 'guarantee', component: FaqGuaranteeComponent},
    {path: 'documents', component: FaqDocumentsComponent},
    {path: 'payment', component: FaqPaymentComponent},
  ]},
  {path: 'reviews', component: ReviewsComponent},
  {path: '**', component: AppMainPageComponent} // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
