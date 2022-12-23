import { Component, OnInit } from '@angular/core';
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
  hobbies: string[];
}
const ELEMENT_DATA: People[] = [];

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color',  'gender'];
  dataSource = ELEMENT_DATA;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
    super();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log('OKEY' + productIdFromRoute);

    this.addSubscription(
      this.peopleService.data$.subscribe((data) => {
        this.dataSource = data;
      })
    );

    this.peopleService.getData(productIdFromRoute);
  }
}
