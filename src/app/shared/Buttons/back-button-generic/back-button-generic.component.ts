import { DialogService } from '../../../services/dialog.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { OutletContext } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-back-button-generic',
  templateUrl: './back-button-generic.component.html',
  styleUrls: ['./back-button-generic.component.scss'],
})
export class BackButtonGenericComponent implements OnInit {

  @Input() text: string;
  @Input() btnClass: string;
  @Output() onClick = new EventEmitter<string>()
  constructor(private location: Location, private peopleService: PeopleService) {}

  ngOnInit(): void {}

  emitEvent() {
    this.onClick.emit();
  }

  back(): void {
    this.peopleService.back();
  }
}
