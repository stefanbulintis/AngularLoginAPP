import { People } from '../model/people';
import  PeopleData  from 'src/assets/people.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  peopleData: People[] = PeopleData;
  data$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getData() {

    // return this.http.get<any>(`https://swapi.dev/api/people`).pipe(map((data) => {
    //   return data.results.map((r,i) => {
    //   return { ...r,id:i+1};
    //   })
    //  }),tap(data => {
    //   this.data$.next(data);
    //   this.peopleData = data;
    //   console.log(this.peopleData);
    // })).subscribe()
    // const localStorageGetItem = localStorage.getItem('people');

    // this.data$.next(localStorageGetItem);
    // console.log(localStorageGetItem);
  }

  deleteData(id) {
    this.peopleData = this.peopleData.filter(d => {
      return d.id != id;
    })
    this.data$.next(this.peopleData);

  }

  goToDetails(id: any){
    console.log(id);
  }
}
