import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject, tap, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  data = [];
  data$ = new BehaviorSubject(null);

  newList = [];
  subject = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {};

  getData(productIdFromRoute) {
    return this.httpClient.get<any>(`https://swapi.dev/api/people/${productIdFromRoute}`)
    .pipe(map((data) => {
       return [data];
     }),tap(data => {
      this.data$.next(data);
      this.data = data;
    })).subscribe(data => console.log(data));
  }
}

