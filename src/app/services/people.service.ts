// import { ColumnObject } from './../shared/models/column-object.model';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable, Subject, tap, map, delay } from 'rxjs';
import { People } from '../model/people';

const peopleData = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '1922',
    gender: 'male',
    homeworld: 'Tatooine',
    hobbies: ['cooking', 'painting', 'tenis'],
  },
  {
    id: 2,
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '1120',
    gender: 'n/a',
    homeworld: 'Tatooine',
    hobbies: ['soccer', 'singing', 'sleeping'],
  },
  {
    id: 3,
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'blue',
    eye_color: 'red',
    birth_year: '3300',
    gender: 'n/a',
    homeworld: 'Naboo',
    hobbies: ['gaming', 'hiking', 'swimming'],
  },
  {
    id: 4,
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'n/a',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '1841',
    gender: 'male',
    homeworld: 'Tatooine',
    hobbies: ['spaceships', 'cooking', 'boxing', 'riding'],
  },
  {
    id: 5,
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '1999',
    gender: 'female',
    homeworld: 'Alrderaan',
    hobbies: ['make-up', 'sleeping', 'cooking', 'singing'],
  },
  {
    id: 6,
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '1652',
    gender: 'male',
    homeworld: 'Tatooine',
    hobbies: ['eating', 'gaming', 'brainstorming', 'physics'],
  },
  {
    id: 7,
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '4700',
    gender: 'female',
    homeworld: 'Tatooine',
    hobbies: ['swimming', 'flying', 'music', 'dancing'],
  },
  {
    id: 8,
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'red',
    eye_color: 'red',
    birth_year: '1000',
    gender: 'n/a',
    homeworld: 'Tatooine',
    hobbies: ['karaoke', 'farming'],
  },
  {
    id: 9,
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    homeworld: 'Tatooine',
    hobbies: ['karaoke', 'farming'],
  },
  {
    id: 10,
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 'Stewjon',
    hobbies: ['karaoke', 'farming'],
  },
];

@Injectable({ providedIn: 'root' })
export class PeopleService {
  data = [];
  data$ = new BehaviorSubject(null);

  myJSON: any;
  text: any;
  obj = [];
  newData = [];

  subject = new BehaviorSubject(null);

  private _peopleSubject$ = new BehaviorSubject<People[]>([]);
  public peopleObs$ = this._peopleSubject$.asObservable();

  constructor(private authService: AuthService, private location: Location) {
    const listService = JSON.parse(localStorage.getItem('list'));
    // console.log(listService);
    if (!listService) {
      localStorage.setItem('list', JSON.stringify(this.obj));
    } else {
      this.obj = listService;
    }
    console.log(this.authService.getToken());
  }

  init(): Observable<People[]> {
    // STORING DATA
    localStorage.setItem('list', JSON.stringify(peopleData));

    // RETRIEVING DATA
    this.obj = JSON.parse(localStorage.getItem('list'));
    this._peopleSubject$.next(this.obj);
    return this.peopleObs$;
  }

  emit(value: any) {
    this._peopleSubject$.next(value);
  }

  getPeopleById(id: number) {
    return this.obj.find((item) => item.id === id);
  }

  deletePeople(id) {
    if (confirm('Are you sure you want to delete ID: ' + id + ' ?')) {
      this.obj = this.obj.filter((d) => {
        return d.id != id;
      });
      this.saveOnLocal(this.obj);
      console.log(this.obj);
      localStorage.setItem('list', JSON.stringify(this.obj));
    }
  }

  saveOnLocal(res: any[]) {
    this.obj = res;
    localStorage.setItem('list', JSON.stringify(this.obj));
    this.emit(this.obj);
    console.log(this.obj);
  }

  addPerson(person: People) {
    console.log(this.obj);
    const newPerson = { ...person, id: this.obj[this.obj.length - 1].id + 1 };
    this.obj.push(newPerson);
    this.emit(this.obj);
    localStorage.setItem('list', JSON.stringify(this.obj));
    console.log(JSON.parse(localStorage.getItem('list')));
  }

  updatePerson(id: number, person: People) {
    let newList = this.obj.map((item) => {
      if (item.id === id) {
        return {...person, id: id};
      }
      return item;
    });
    this.saveOnLocal(newList);
  }

  clear() {
    this.obj = [];
    this.emit(null);
  }

  back(): void {
    this.location.back();
  }

  // configCol(): ColumnObject[] {
    // let columns = Object.keys(this.data[0])

  // }

  // return Object.keys(data[0]).map(item => {
  //   return {
  //     name: item
  //   }
}
