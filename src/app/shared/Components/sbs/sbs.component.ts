import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sbs',
  templateUrl: './sbs.component.html',
  styleUrls: ['./sbs.component.scss']
})
export class SBSComponent implements OnInit {
  @Input() fields: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
