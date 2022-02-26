import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCatalogPageComponent } from './app-catalog-page/app-catalog-page.component';
import { AppShoesComponent } from './app-catalog-page/app-shoes/app-shoes.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppModelComponent } from './app-model/app-model.component';
import { FaqContactsComponent } from './faq-page/faq-contacts/faq-contacts.component';
import { FaqDeliveryComponent } from './faq-page/faq-delivery/faq-delivery.component';
import { FaqDocumentsComponent } from './faq-page/faq-documents/faq-documents.component';
import { FaqFaqComponent } from './faq-page/faq-faq/faq-faq.component';
import { FaqGuaranteeComponent } from './faq-page/faq-guarantee/faq-guarantee.component';
import { FaqPageComponent } from './faq-page/faq-page.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'catalog', component: AppCatalogPageComponent, children: [
    {path: 'shoes', component: AppShoesComponent},  
  ]},
  {path: 'model/:id', component: AppModelComponent},
  {path: 'faq', component: FaqPageComponent, children: [
    {path: 'contacts', component: FaqContactsComponent},
    {path: 'delivery', component: FaqDeliveryComponent},
    {path: 'answers', component: FaqFaqComponent},
    {path: 'guarantee', component: FaqGuaranteeComponent},
    {path: 'documents', component: FaqDocumentsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
