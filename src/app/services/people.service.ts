import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject, tap, map, delay } from 'rxjs';
import { People } from '../model/people';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  data = [];
  data$ = new BehaviorSubject(null);

  newList = [];
  subject = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {
    if(!localStorage.getItem('list')) {
      localStorage.setItem('list', JSON.stringify(this._people));
    }
    else {
      this._people = JSON.parse(localStorage.getItem('list'));
    }
  }

  public _people: People[] = [];
  private _peopleSubject$ = new BehaviorSubject<People[]>([]);
  public peopleObs$ = this._peopleSubject$.asObservable();

  init() {
    return this.httpClient.get('../../assets/people.json');
  }

  emit(value: any) {
    this._peopleSubject$.next(value);
  }

  getPeople() {
    // return this._people.slice();
    return this.peopleObs$;
  }

  getPeopleById(id: number) {
    return this._people.find((item) => item.id === id);
  }

  saveOnLocal(res: any[]) {
    localStorage.setItem('list', JSON.stringify(this._people));
    this._people = res;
    this.emit(this._people);
  }

  getData(productIdFromRoute) {
    // return this.httpClient.get<any>(`https://swapi.dev/api/people/${productIdFromRoute}`)
    // .pipe(map((data) => {
    //    return [data];
    //  }),tap(data => {
    //   this.data$.next(data);
    //   this.data = data;
    // })).subscribe(data => console.log(data));
    //}
  }
}
