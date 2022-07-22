import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ElevyComponent } from './products/elevy/elevy.component';
import { DataEntryProcessingComponent } from './services/data-entry-processing/data-entry-processing.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { SoftwareDevelopmentComponent } from './services/software-development/software-development.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ServicesComponent,
    BlogComponent,
    ProductDetailsComponent,
    ElevyComponent,
    DataEntryProcessingComponent,
    WebDevelopmentComponent,
    SoftwareDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
