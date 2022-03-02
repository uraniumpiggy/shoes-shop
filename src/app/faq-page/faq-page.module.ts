import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { FaqPageComponent } from "./faq-page.component";
import { FaqContactsComponent } from './faq-contacts/faq-contacts.component';
import { CommonModule } from "@angular/common";
import { FaqDeliveryComponent } from './faq-delivery/faq-delivery.component';
import { FaqFaqComponent } from './faq-faq/faq-faq.component';
import { FaqGuaranteeComponent } from './faq-guarantee/faq-guarantee.component';
import { FaqDocumentsComponent } from './faq-documents/faq-documents.component';
import { FaqContactsModule } from "./faq-contacts/faq-contacts.module";
import { FaqDeliveryModule } from "./faq-delivery/faq-delivery.module";
import { FaqDocumentsModule } from "./faq-documents/faq-documents.module";
import { FaqFaqModule } from "./faq-faq/faq-faq.module";
import { FaqGuaranteeModule } from "./faq-guarantee/faq-guarantee.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        FaqPageComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        RouterModule,
        FaqContactsModule,
        FaqDeliveryModule,
        FaqDocumentsModule,
        FaqFaqModule,
        FaqGuaranteeModule,
    ],
    bootstrap: [
        FaqPageComponent,        
    ],
})
export class FaqPageModule {}