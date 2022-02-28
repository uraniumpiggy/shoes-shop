import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AppCatalogPageComponent } from "./app-catalog-page.component";
import { AppShoesComponent } from "./app-shoes/app-shoes.component";
import { AppShoesModule } from "./app-shoes/app-shoes.module";
import { AppFiltersComponent } from './app-filters/app-filters.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
    declarations: [
        AppCatalogPageComponent,
        ClothesComponent,
        AccessoriesComponent,
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