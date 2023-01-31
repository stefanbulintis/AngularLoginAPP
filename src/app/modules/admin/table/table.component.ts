import { PeopleService } from 'src/app/services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent implements OnInit {
  data: any[];
  columns: any[];

  constructor(private peopleService: PeopleService) {
    super();
  }

  ngOnInit(): void {
    this.peopleService.peopleObs$.subscribe((data) => {
      this.data = data;
      this.columns = this.getColumns(this.data);
    });
  }

  private getColumns(data: any[]): {[key: string]: string}[] {
    return Object.keys(data[0]).map(item => {
      return {
        name: item
      }
    }).slice(0,2)
  }

  
}
