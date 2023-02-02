import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectionStrategy, Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabel-generic',
  templateUrl: './tabel-generic.component.html',
  styleUrls: ['./tabel-generic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabelGenericComponent implements OnInit, AfterViewInit {

  tableData: MatTableDataSource<any>;

  @Input() set dataSource(data: any[]) {
    this.tableData = new MatTableDataSource(data);
    console.log(data);
  };

  @Input() set columns(dataTitle: any[]) {
    this.newCol = dataTitle;
    this.names = this.getColNames(dataTitle);
  };

  newCol: any[];
  names: string[];
  keys: string[];
  isAdmin: string | undefined;
  //displayedColumns: string[] = ['id', 'name', 'detail', 'edit', 'actions'];

  constructor(private router: Router,
    private peopleService: PeopleService,
    private authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.tableData);
    this.isAdmin = this.authService.getToken();
  }

  ngAfterViewInit(): void {
    console.log(this.authService.getToken());
  }

  deleteData(index) {
    this.peopleService.deletePeople(index);
  }

  ngOnChanges() {
    if (this.tableData && this.tableData.data.length > 0) {
      this.keys = Object.keys(this.tableData);
    }
  }

  getColNames(columns: any[]) {
    return columns.map(item => {
      return item.name;
    })
  }
}
