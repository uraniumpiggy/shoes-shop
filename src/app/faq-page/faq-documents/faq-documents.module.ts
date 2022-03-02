import { NgModule } from "@angular/core";
import { FaqDocumentsComponent } from "./faq-documents.component";


@NgModule({
    declarations: [FaqDocumentsComponent],
    bootstrap: [FaqDocumentsComponent],
    exports: [FaqDocumentsComponent],
})
export class FaqDocumentsModule {}