import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { PeopleService } from 'src/app/services/people.service';

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

@Component({
  selector: 'app-details-generic',
  templateUrl: './details-generic.component.html',
  styleUrls: ['./details-generic.component.scss']
})
export class DetailsGenericComponent extends BaseComponent implements OnInit {

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

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
    super();
  }
  item = new MatTableDataSource<any>();
  id?: number;
  people: People[] = [];
  found?: any;
  @ViewChild('table') table?: MatTable<any>;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id']; //console.log(id);
      this.people = this.peopleService.obj;
      this.found = this.people.find((item) => item.id === this.id);
      this.item.data = [this.found]; //Data source must be an array, not a single object like in this case
      // console.log(this.id);
      console.log(this.found);
    });
  }
}
