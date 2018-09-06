import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-in-category',
  templateUrl: './item-in-category.component.html',
  styleUrls: ['./item-in-category.component.css']
})
export class ItemInCategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
