import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { FaqPageComponent } from "./faq-page.component";
import { FaqContactsComponent } from './faq-contacts/faq-contacts.component';
import { CommonModule } from "@angular/common";
import { FaqDeliveryComponent } from './faq-delivery/faq-delivery.component';
import { FaqFaqComponent } from './faq-faq/faq-faq.component';
import { FaqGuaranteeComponent } from './faq-guarantee/faq-guarantee.component';
import { FaqDocumentsComponent } from './faq-documents/faq-documents.component';


@NgModule({
    declarations: [
        FaqPageComponent,
        FaqContactsComponent,
        FaqDeliveryComponent,
        FaqFaqComponent,
        FaqGuaranteeComponent,
        FaqDocumentsComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    bootstrap: [
        FaqPageComponent,
    ],
})
export class FaqPageModule {}