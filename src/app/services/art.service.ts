import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
import {Art} from '../../models/art'

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private api = environment.apiUrl+'/arts';
  constructor(private http: HttpClient) { }

  findAll() {
    const observable = new Observable<any>(obs => {
      this.http.get<Array<any>>(this.api).subscribe(response => {
        obs.next(response);
      })
    })    
    return observable;
  }
  findLatest(nb) {
    const observable = new Observable<any>(obs => {
      this.http.get<Array<any>>(this.api).subscribe(res => {
        obs.next(res.slice(nb, 4));
      })
    })    
    return observable;
  }
  find(id) {
    const observable = new Observable<any>(obs => {
      this.http.get<Array<any>>(this.api).subscribe(res => {
        obs.next(res.find(el => el.id === id));
      })
    })    
    return observable;
  }
  create(art: Art) {
    return this.http.post(this.api, art);
  }
}
