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
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { AlertDialogModule } from './alert-dialog/alert-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchGridComponent,
    ReviewsComponent,
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
    OrderModule,
    PaymentModule,
    AlertDialogModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
