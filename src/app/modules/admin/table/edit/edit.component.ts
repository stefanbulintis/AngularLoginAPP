import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private peopleService: PeopleService,) { }

  ngOnInit(): void {
  }
  back(item): void {
    this.peopleService.back();
  }

}
