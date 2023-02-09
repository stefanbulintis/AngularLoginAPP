import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-add-button-generic',
  templateUrl: './add-button-generic.component.html',
  styleUrls: ['./add-button-generic.component.scss']
})
export class AddButtonGenericComponent implements OnInit {

  constructor(private router: Router,
    private peopleService: PeopleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToAddPeople() {
    this.router.navigate([`admin/addUser`]);
  }
}
