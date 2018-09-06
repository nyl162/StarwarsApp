import { Component, OnInit } from '@angular/core';
import { ObtainCategoryService } from '../services/obtain-category.service';
import {SwapiRequestService} from '../services/swapi-request.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private newResponce: any;

  constructor(private specialS: SwapiRequestService) {
    this.specialS.specialItem('species','2')
      .subscribe( (data:any) =>{ 
        console.log(data);
        this.newResponce = data;
      })
   }

  ngOnInit() {
  }



}
