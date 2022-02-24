import { NgModule } from "@angular/core";
import { AppShoesComponent } from "./app-shoes.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppCardItemComponent } from "src/app/app-card-item/app-card-item.component";
import { AppFiltersComponent } from "../app-filters/app-filters.component";
import { AppCardItemModule } from "src/app/app-card-item/app-card-item.module";

@NgModule({
    declarations: [
        AppShoesComponent,
        AppFiltersComponent,
    ],
    imports: [
        SharedModule,
        AppCardItemModule,
    ],
    bootstrap: [AppShoesComponent]
})
export class AppShoesModule {}