import { Component, OnInit } from '@angular/core';
import {CategoryI} from '../model/model';
import {ObtainCategoryService} from '../services/obtain-category.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

private CategoryList: CategoryI[] = [] /*: CategoryI[] ;/*=[
  {category:"Characters", url: "people"},
  {category:"Films", url: "films"},
  {category:"Species", url: "species"},
  {category:"Starship", url: "starships"},
  {category:"Vehicles", url: "vehicles"},
  {category:"Planets", url: "planets"}
];*/

//private CategoryList: CategoryI[] =[{category:"Characters", url: "people"}]

constructor(private router:Router, private CategoryL: ObtainCategoryService) {
  this.CategoryL.checkCategory()
    .subscribe( (data:any) =>{ 
      data.forEach((item) => { 
       // this.CategoryList[index].url = item;
       ////////let temp: CategoryI = {category: item , url: item};
      // let temp:string = item;
       //if(item ==="people") {}
       this.CategoryList.push({category: item , url: item});
       // this.CategoryList[index].category = item;
        
      });
    })

    /// some how not working
  this.CategoryList.forEach((item) => {
    if (item.category == "people"){
      item.category = "characters";
    }
  })
  }

  ngOnInit() {

}

selectedCategory(dest:string){
  this.router.navigate(['/item', dest]);
  console.log(dest);
}

}
