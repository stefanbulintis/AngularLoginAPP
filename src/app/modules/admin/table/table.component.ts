import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { PostService } from 'src/app/services/post.service';

export interface PeriodicElement {
  name: string;
  id: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'detail', 'edit', 'actions' ];
  dataSource = ELEMENT_DATA;

  constructor(private PostService: PostService, private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    // this.PostService.getData().pipe(map((data) => {
    //   return data.results.map((r,i) => {
    //     return { ...r,id:i};
    //   })
    // })).subscribe((data) => {
    //   this.dataSource = data;
    //   console.log(this.dataSource)
    // });
    this.addSubscription(
      this.PostService.data$.subscribe((data) => {
        this.dataSource = data;
      })
    );

    this.PostService.getData();
  }

  deleteData(index) {
    // this.deleteService.deleteData(1).subscribe(data => {
    //   console.log("User deleted successfully" + data);
    // }, (err) => {
    //   console.log("Unable to delete this user" + err);
    // })

    this.PostService.deleteData(index);
    // console.log(index);
  }

  goToDetails(index){
    console.log(index);
    this.router.navigate([`admin/details/${index}`]);
  }

  goToAddPeople() {
    this.router.navigate([`addInfo`]);
  }
}
