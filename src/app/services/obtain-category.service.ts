import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtainCategoryService {

  private CategoryList: string[];

  constructor(private http: HttpClient) { 
  }

  checkCategory():Observable<any>{
    return this.http
    .get(`https://swapi.co/api/?format=json`)
    .pipe(
      map(response => {
      return Object.keys(response);
    })
    );
    
  }
/*
  checkCategory(){
    this.http.get('https://swapi.co/api/?format=json')
    .pipe(
      map( (data) => {
        this.CategoryList = Object.keys(data)
        return data;
      })
    );
  }
  */

}
