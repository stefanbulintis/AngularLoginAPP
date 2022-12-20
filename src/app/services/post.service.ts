import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  data = [];
  data$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(`https://swapi.dev/api/people`).pipe(map((data) => {
      return data.results.map((r,i) => {
      return { ...r,id:i+1};
      })
     }),tap(data => {
      this.data$.next(data);
      this.data = data;
    })).subscribe()
  }

  deleteData(id) {
    this.data = this.data.filter(d => {
      return d.id != id;
    })
    this.data$.next(this.data);
    console.log(this.data);
  }

  goToDetails(id: any){
    console.log(id);
  }


}
