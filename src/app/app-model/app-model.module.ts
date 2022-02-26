import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragScrollModule } from "ngx-drag-scroll";
import { AppCarouselComponent } from "../app-main-page/app-carousel/app-carousel.component";
import { AppCarouselModule } from "../app-main-page/app-carousel/app-carousel.module";
import { AppModelComponent } from "./app-model.component";
import { AppModelInfoLinkComponent } from './app-model-info-link/app-model-info-link.component';
import { FullScreenBannerComponent } from './full-screen-banner/full-screen-banner.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppModelComponent,
        AppModelInfoLinkComponent,
        FullScreenBannerComponent,
    ],
    imports: [
        CommonModule,
        AppCarouselModule,
        FormsModule,
    ],
    bootstrap: [AppModelComponent],
    exports: [
        AppModelComponent,
    ]
})
export class AppModelModule {}