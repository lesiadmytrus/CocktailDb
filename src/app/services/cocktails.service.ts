import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getStart(): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`);
  }

  public getHeaderFilter(): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
  }

  public getSomeFilterUniversal(list: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${list}`);
  }
}
