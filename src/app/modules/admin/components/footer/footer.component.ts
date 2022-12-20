import { Component, OnInit } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // myData: any;
  // myData$: any;

  constructor(private PostService: PostService ) {
  }

  ngOnInit(): void {
  //  this.PostService.getData().subscribe((data) => this.myData$ = data.results);
    // this.PostService.getData();
  }
}
