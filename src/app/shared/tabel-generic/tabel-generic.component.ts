import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-tabel-generic',
  templateUrl: './tabel-generic.component.html',
  styleUrls: ['./tabel-generic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabelGenericComponent implements OnInit {

  tableData: MatTableDataSource<any>;

  @Input() set dataSource(data: any[]) {
    this.tableData = new MatTableDataSource(data);
    console.log(data)
  };

  keys: string[];
  displayedColumns: string[] = ['id', 'name', 'detail', 'edit', 'actions'];

  constructor(private router: Router,
    private peopleService: PeopleService) {}

  ngOnInit(): void {
    console.log(this.tableData)
  }

  deleteData(index) {
    this.peopleService.deletePeople(index);
  }

  ngOnChanges() {
    if (this.tableData && this.tableData.data.length > 0) {
      this.keys = Object.keys(this.tableData);
    }
  }
}
