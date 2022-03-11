import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { FaqDocumentsComponent } from "./faq-documents.component";


@NgModule({
    declarations: [FaqDocumentsComponent],
    bootstrap: [FaqDocumentsComponent],
    imports: [
        CommonModule,
    ],
    exports: [FaqDocumentsComponent],
})
export class FaqDocumentsModule {}