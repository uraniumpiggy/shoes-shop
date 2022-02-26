import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCatalogPageComponent } from './app-catalog-page/app-catalog-page.component';
import { AppShoesComponent } from './app-catalog-page/app-shoes/app-shoes.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppModelComponent } from './app-model/app-model.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'catalog', component: AppCatalogPageComponent, children: [
    {path: 'shoes', component: AppShoesComponent},  
  ]},
  {path: 'model/:id', component: AppModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
