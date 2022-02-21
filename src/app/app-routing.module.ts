import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  // {path: 'catalog', component: undefined}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
