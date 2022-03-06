import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainPageModule } from './app-main-page/app-main-page.module';
import { AppCatalogPageModule } from './app-catalog-page/app-catalog-page.module';
import { AppCardItemModule } from './app-card-item/app-card-item.module';
import { AppModelModule } from './app-model/app-model.module';
import { FormsModule } from '@angular/forms';
import { FaqPageModule } from './faq-page/faq-page.module';
import { SearchGridComponent } from './search-grid/search-grid.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchGridComponent,
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
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
