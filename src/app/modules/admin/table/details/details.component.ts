import { HttpClient } from '@angular/common/http';
import { PeopleService } from './../../../../services/people.service';
import { BaseComponent } from 'src/app/base/base.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import  People  from '../../../../model/people'
import { MatTable, MatTableDataSource } from '@angular/material/table';

interface People {
  id: number;
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  homeworld: string;
  hobbies?: string[];
}
//const ELEMENT_DATA: People[] = [];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'gender',
    'homeworld',
    'hobbies',
  ];
  //dataSource = ELEMENT_DATA;
  public peopleInfo: any;
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private http: HttpClient
  ) {
    super();
  }

  item = new MatTableDataSource<any>();
  id?: number;
  people: People[] = [];
  found?: any;
  @ViewChild('table') table?: MatTable<any>;

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('id'));
    // console.log('OKEY' + productIdFromRoute);

    // this.addSubscription(
    //   this.peopleService.data$.subscribe((data) => {
    //     this.dataSource = data;
    //   })
    // );

    // this.peopleService.getData(productIdFromRoute);

    // const url: string = `../../../../../assets/people.json`;
    // this.http.get(url).subscribe((response) => {
    //   this.peopleInfo = response;
    // })
    this.route.params.subscribe((params) => {
      this.id = +params['id']; //console.log(id);
      this.people = this.peopleService._people;
      this.found = this.people.find((item) => item.id === this.id);
      this.item.data = [this.found]; //Data source must be an array, not a single object like in this case
      // console.log(this.id);
      console.log(this.found);
    });
    // super.addSubscription(

    // );
  }
}
