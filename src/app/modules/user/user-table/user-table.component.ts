import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { BaseComponent } from 'src/app/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
interface Column {
  name: string;
  type: string;
  action?: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent extends BaseComponent implements OnInit {
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
}
