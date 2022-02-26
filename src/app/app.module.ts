import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainPageModule } from './app-main-page/app-main-page.module';
import { SharedModule } from './shared/shared.module';
import { AppCatalogPageComponent } from './app-catalog-page/app-catalog-page.component';
import { AppCardItemComponent } from './app-card-item/app-card-item.component';
import { AppCatalogPageModule } from './app-catalog-page/app-catalog-page.module';
import { AppShoesComponent } from './app-catalog-page/app-shoes/app-shoes.component';
import { AppShoesModule } from './app-catalog-page/app-shoes/app-shoes.module';
import { AppModelComponent } from './app-model/app-model.component';
import { AppCardItemModule } from './app-card-item/app-card-item.module';
import { AppModelModule } from './app-model/app-model.module';
import { FormsModule } from '@angular/forms';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FaqPageModule } from './faq-page/faq-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMainPageModule,
    AppCatalogPageModule,
    AppCardItemModule,
    AppModelModule,
    FormsModule,
    FaqPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
