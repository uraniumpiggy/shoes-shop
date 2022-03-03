import { NgModule } from "@angular/core";
import { AppShoesComponent } from "./app-shoes.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppCardItemComponent } from "src/app/app-card-item/app-card-item.component";
import { AppFiltersComponent } from "../app-filters/app-filters.component";
import { AppCardItemModule } from "src/app/app-card-item/app-card-item.module";
import { AppFiltersModule } from "../app-filters/app-filters.module";

@NgModule({
    declarations: [
        AppShoesComponent,
    ],
    imports: [
        SharedModule,
        AppCardItemModule,
        AppFiltersModule,
    ],
    bootstrap: [AppShoesComponent]
})
export class AppShoesModule {}