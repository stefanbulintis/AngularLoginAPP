import { PeopleService } from './../../../../services/people.service';
import { BaseComponent } from 'src/app/base/base.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  back(item): void {
    this.peopleService.back();
  }

}
