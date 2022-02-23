import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCatalogPageComponent } from './app-catalog-page/app-catalog-page.component';
import { AppShoesComponent } from './app-catalog-page/app-shoes/app-shoes.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent},
  {path: 'catalog', component: AppCatalogPageComponent, children: [
    {path: 'shoes', component: AppShoesComponent},  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
