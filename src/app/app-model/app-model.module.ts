import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragScrollModule } from "ngx-drag-scroll";
import { AppCarouselComponent } from "../app-main-page/app-carousel/app-carousel.component";
import { AppCarouselModule } from "../app-main-page/app-carousel/app-carousel.module";
import { AppModelComponent } from "./app-model.component";
import { AppModelInfoLinkComponent } from './app-model-info-link/app-model-info-link.component';
import { FullScreenBannerComponent } from './full-screen-banner/full-screen-banner.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { FaqContactsComponent } from "../faq-page/faq-contacts/faq-contacts.component";
import { FaqContactsModule } from "../faq-page/faq-contacts/faq-contacts.module";
import { FaqDeliveryModule } from "../faq-page/faq-delivery/faq-delivery.module";
import { FaqDocumentsModule } from "../faq-page/faq-documents/faq-documents.module";
import { FaqFaqModule } from "../faq-page/faq-faq/faq-faq.module";
import { FaqGuaranteeModule } from "../faq-page/faq-guarantee/faq-guarantee.module";

@NgModule({
    declarations: [
        AppModelComponent,
        AppModelInfoLinkComponent,
        FullScreenBannerComponent,
    ],
    imports: [
        CommonModule,
        AppCarouselModule,
        FormsModule,
        RouterModule,
        FaqContactsModule,
        FaqDeliveryModule,
        FaqDocumentsModule,
        FaqFaqModule,
        FaqGuaranteeModule,
    ],
    bootstrap: [AppModelComponent],
    exports: [
        AppModelComponent,
    ]
})
export class AppModelModule {}