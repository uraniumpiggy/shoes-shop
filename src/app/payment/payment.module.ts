import { NgModule } from "@angular/core";
import { AlertDialogModule } from "../alert-dialog/alert-dialog.module";
import { PaymentComponent } from "./payment.component";

@NgModule({
    declarations: [
        PaymentComponent
    ],
    imports: [
        AlertDialogModule
    ],
    bootstrap: [
        PaymentComponent
    ]
})
export class PaymentModule {}