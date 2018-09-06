import { Component, OnInit } from '@angular/core';
import { ObtainCategoryService } from '../services/obtain-category.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private CategoryL: ObtainCategoryService) {
    this.CategoryL.checkCategory()
      .subscribe( (data:any) =>{ 
        console.log(data);
      })
   }

  ngOnInit() {
  }



}
