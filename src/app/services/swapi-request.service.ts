import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiRequestService {

  constructor(private http: HttpClient) { }
// for item call
  iteminCategory(input):Observable<any>{
    return this.http
    .get(`https://swapi.co/api/${input}/?format=json`)
    .pipe(
      map(response => {
       // console.log(response.results);
      return response;
    })
    );
    
  }
// for detail call

detailsinItem(Cat,ID):Observable<any>{
  return this.http
  //.get(`https://swapi.co/api/${input}/?format=json`)
  .get(`https://swapi.co/api/${Cat}/${ID}/?format=json`)
  .pipe(
    map(response => {
     console.log(response);
    return response;
  })
  );
  
}

}
