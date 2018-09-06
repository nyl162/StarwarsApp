
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category/category.component";
import { ItemInCategoryComponent } from "./item-in-category/item-in-category.component";
import { DetailsComponent } from './details/details.component'; 


const appRoutes :Routes = [

    {path: '' , component: CategoryComponent},
    {path: 'item/:CategoryID' , component: ItemInCategoryComponent},
    {path: 'details/:CatID/:detailID' , component: DetailsComponent},
    {path: '**' , redirectTo: '/', pathMatch: 'full'}

];



@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
  })

export class RoutingModule {}