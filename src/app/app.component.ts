import { HttpClient } from '@angular/common/http';
import { PeopleService } from 'src/app/services/people.service';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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

    const list = JSON.parse(<string>localStorage.getItem('list'));

    //console.log(list);

    if(!list || list.length === 0) {

      (async () => {
        try{
          const result = await lastValueFrom(this.peopleService.init());
          console.log(Object.values(result));
          this.peopleService.saveOnLocal(Object.values(result));
        }catch(err) {
          console.log(err);
        }
      })();

      // this.peopleService.init().subscribe((res: any) => {
      //   //console.log(res);
      //   this.peopleService.saveOnLocal(res);
      // });
    }
    else {
      this.peopleService.emit(list);
    }
  }
}
