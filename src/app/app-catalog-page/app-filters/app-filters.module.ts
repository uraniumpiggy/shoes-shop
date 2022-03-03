import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppFiltersComponent } from "./app-filters.component";


@NgModule({
    declarations: [AppFiltersComponent],
    imports: [
        FormsModule,
        CommonModule,
    ],
    bootstrap: [AppFiltersComponent],
    exports: [AppFiltersComponent],
})
export class AppFiltersModule {}