import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-add-button-generic',
  templateUrl: './add-button-generic.component.html',
  styleUrls: ['./add-button-generic.component.scss']
})
export class AddButtonGenericComponent implements OnInit {

  constructor(private router: Router,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
  }
  goToAddPeople() {
    this.router.navigate([`addInfo`]);
  }
}
