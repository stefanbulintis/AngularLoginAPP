import { PeopleService } from 'src/app/services/people.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(private auth: AuthService, private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    localStorage.clear();
    this.peopleService.clear();
  }
}
