import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
import {Favorite} from '../../models/favorite'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private api = environment.apiUrl+'/favorites';
  constructor(private http: HttpClient) { }

  findAll() {
    const observable = new Observable<any>(obs => {
      this.http.get<Array<any>>(this.api).subscribe(response => {
        obs.next(response);
      })
    })    
    return observable;
  }
  create(favorite: Favorite) {
    return this.http.post(this.api, favorite);
  }
}
