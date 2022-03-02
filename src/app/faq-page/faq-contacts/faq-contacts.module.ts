import { NgModule } from "@angular/core";
import { FaqContactsComponent } from "./faq-contacts.component";


@NgModule({
    declarations: [FaqContactsComponent],
    bootstrap: [FaqContactsComponent],
    exports: [FaqContactsComponent],
})
export class FaqContactsModule {}