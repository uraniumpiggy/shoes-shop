import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { OrderComponent } from "./order.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        HttpClientModule,
        MatAutocompleteModule,
    ],
    exports: [
        OrderComponent,
    ],
})
export class OrderModule {}