import { NgModule } from "@angular/core";
import { AppMainPageComponent } from "./app-main-page.component";
import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from "../shared/shared.module";
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AppRoutingModule } from "../app-routing.module";
import { AppCardItemComponent } from "../app-card-item/app-card-item.component";
import { AppCardItemModule } from "../app-card-item/app-card-item.module";
import { AppCarouselModule } from "./app-carousel/app-carousel.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppMainPageComponent,
    ],
    imports: [
        AppCardItemModule,
        AppRoutingModule,
        DragScrollModule,
        CommonModule,
        AppCarouselModule,
    ],
    bootstrap: [AppMainPageComponent]
})
export class AppMainPageModule {}