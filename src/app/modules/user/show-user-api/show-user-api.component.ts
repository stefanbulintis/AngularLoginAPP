import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-user-api',
  templateUrl: './show-user-api.component.html',
  styleUrls: ['./show-user-api.component.scss']
})
export class ShowUserApiComponent implements OnInit {

  constructor(  private service: PostService) { }

  ngOnInit(): void {
  }

}
