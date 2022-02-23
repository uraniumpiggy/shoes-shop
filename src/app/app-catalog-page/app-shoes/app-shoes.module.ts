import { NgModule } from "@angular/core";
import { AppShoesComponent } from "./app-shoes.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppCardItemComponent } from "src/app/app-card-item/app-card-item.component";

@NgModule({
    declarations: [
        AppShoesComponent,
    ],
    imports: [
        SharedModule,
    ],
    bootstrap: [AppShoesComponent]
})
export class AppShoesModule {}