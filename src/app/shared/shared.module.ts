import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppCardItemComponent } from "../app-card-item/app-card-item.component";

@NgModule({
    declarations: [
        // AppCardItemComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        // AppCardItemComponent,
        CommonModule,
    ]
})
export class SharedModule {

}