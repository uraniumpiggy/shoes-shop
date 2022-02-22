import { NgModule } from "@angular/core";
import { AppMainPageComponent } from "./app-main-page.component";
import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AppMainPageComponent,
    ],
    imports: [
        DragScrollModule,
        SharedModule,
    ],
    bootstrap: [AppMainPageComponent]
})
export class AppMainPageModule {}