import { NgModule } from "@angular/core";
import { AppMainPageComponent } from "./app-main-page.component";
import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from "../shared/shared.module";
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AppRoutingModule } from "../app-routing.module";
import { AppCardItemComponent } from "../app-card-item/app-card-item.component";

@NgModule({
    declarations: [
        AppMainPageComponent,
        AppCarouselComponent,
    ],
    imports: [
        AppRoutingModule,
        DragScrollModule,
        SharedModule,
    ],
    bootstrap: [AppMainPageComponent]
})
export class AppMainPageModule {}