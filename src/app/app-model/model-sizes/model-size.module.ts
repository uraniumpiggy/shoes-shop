import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ModelSizesComponent } from "./model-sizes.component";


@NgModule({
    declarations: [ModelSizesComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
    ],
    bootstrap: [ModelSizesComponent],
    exports: [ModelSizesComponent],
})
export class ModelSizesModule {}