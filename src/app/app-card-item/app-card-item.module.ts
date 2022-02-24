import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AppCardItemComponent } from "./app-card-item.component";

@NgModule({
    declarations: [
        AppCardItemComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    bootstrap: [AppCardItemComponent],
    exports: [
        AppCardItemComponent,
    ]
})
export class AppCardItemModule {}