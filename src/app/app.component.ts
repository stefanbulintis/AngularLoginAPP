import { HttpClient } from '@angular/common/http';
import { PeopleService } from 'src/app/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-app';

  constructor(private httpClient: HttpClient, private peopleService: PeopleService) {

  }

  ngOnInit(): void {
    if(!localStorage.getItem('list') || localStorage.getItem('list').length === 0) {
      this.peopleService.init().subscribe((res: any) => {
        console.log(res);
        this.peopleService.saveOnLocal(res);
      });
    }
  }
}
