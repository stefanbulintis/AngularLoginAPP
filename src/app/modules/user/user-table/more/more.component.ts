import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent extends BaseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
    super();
  }

  ngOnInit(): void {

    };


  }

