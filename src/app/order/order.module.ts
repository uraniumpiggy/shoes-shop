import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OrderComponent } from "./order.component";

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        FormsModule,
    ],
    exports: [
        OrderComponent,
    ],
})
export class OrderModule {}