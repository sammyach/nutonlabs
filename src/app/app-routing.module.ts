import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ElevyComponent } from './products/elevy/elevy.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { DataEntryProcessingComponent } from './services/data-entry-processing/data-entry-processing.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services/data-entry-processing', component: DataEntryProcessingComponent},
  {path: 'services/website-and-seo', component: WebDevelopmentComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/e-levy-calculator', component: ElevyComponent},
  {path: 'products/:slug', component: ProductDetailsComponent},
  {path: 'blog', component: BlogComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
