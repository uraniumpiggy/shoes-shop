import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragScrollModule } from "ngx-drag-scroll";
import { AppCardItemModule } from "src/app/app-card-item/app-card-item.module";
import { AppCarouselComponent } from "./app-carousel.component";

@NgModule({
    declarations: [
        AppCarouselComponent,
    ],
    imports: [
        CommonModule,
        DragScrollModule,
        AppCardItemModule,
    ],
    bootstrap: [AppCarouselComponent],
    exports: [
        AppCarouselComponent,
    ]
})
export class AppCarouselModule {}