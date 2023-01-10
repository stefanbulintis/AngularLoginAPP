import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { PostService } from 'src/app/services/post.service';

export interface PeriodicElement {
  id: number;
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  homeworld: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'detail', 'edit', 'actions' ];
  dataSource ;

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

    this.dataSource = this.PostService.peopleData;
    // this.addSubscription(
    //   this.PostService.data$.subscribe((peopleData) => {
    //     console.log(peopleData);

    //     this.dataSource = peopleData;
    //     const person = JSON.parse(localStorage.getItem("people"));
    //     //this.dataSource.push(person);
    //   })
    // );

    //this.PostService.getData();
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
