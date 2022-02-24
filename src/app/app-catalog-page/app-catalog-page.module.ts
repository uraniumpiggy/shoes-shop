import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AppCatalogPageComponent } from "./app-catalog-page.component";
import { AppShoesComponent } from "./app-shoes/app-shoes.component";
import { AppShoesModule } from "./app-shoes/app-shoes.module";
import { AppFiltersComponent } from './app-filters/app-filters.component';


@NgModule({
    declarations: [
        AppCatalogPageComponent,
        // AppShoesComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        AppShoesModule,
    ],
    bootstrap: [AppCatalogPageComponent],
    exports: [
        AppCatalogPageComponent
    ]
})
export class AppCatalogPageModule {}