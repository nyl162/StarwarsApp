import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { importModule } from './import.module';
import { CategoryComponent } from './category/category.component';
import { TestComponent } from './test/test.component';
import { ItemInCategoryComponent } from './item-in-category/item-in-category.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TestComponent,
    ItemInCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    importModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
