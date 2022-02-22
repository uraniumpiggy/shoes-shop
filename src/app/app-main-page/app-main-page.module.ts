import { NgModule } from "@angular/core";
import { AppMainPageComponent } from "./app-main-page.component";
import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from "../shared/shared.module";
import { AppCarouselComponent } from './app-carousel/app-carousel.component';

@NgModule({
    declarations: [
        AppMainPageComponent,
        AppCarouselComponent,
    ],
    imports: [
        DragScrollModule,
        SharedModule,
    ],
    bootstrap: [AppMainPageComponent]
})
export class AppMainPageModule {}