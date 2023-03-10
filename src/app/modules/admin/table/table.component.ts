import { AuthService } from 'src/app/services/auth.service';
import { PeopleService } from 'src/app/services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { Column } from 'src/app/shared/models/column-object.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent implements OnInit {
  data: any[];
  columns: any[];

  constructor(private authService: AuthService, private peopleService: PeopleService) {
    super();

  }

  ngOnInit(): void {
    this.peopleService.peopleObs$.subscribe((data) => {
      this.data = data;
      this.columns = this.getColumns(this.data);
    });
  }

  private getColumns(data: any[]): Column[] {
    let temporaryColumns: Column[] = Object.keys(data[0]).map(item => {
      return {
        name: item,
        type: "text"
      }
    }).slice(0,2);
    temporaryColumns = [
      ...temporaryColumns, {
        name: "details",
        type: "button",
        action: "details"
      }];
    if(this.authService.getToken() === "admin"){
      temporaryColumns = [
        ...temporaryColumns, {
          name: "edit",
          type: "button",
          action: "edit"
        },
        {
          name: "delete",
          type: "button",
          action: "delete"
        }
      ]
    }
    return temporaryColumns;
  }
  goToAddPeople(item) {
    this.peopleService.goToAddPeople();
  }
  }
