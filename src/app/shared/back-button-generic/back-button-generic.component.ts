import { DialogService } from './../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button-generic',
  templateUrl: './back-button-generic.component.html',
  styleUrls: ['./back-button-generic.component.scss'],
})
export class BackButtonGenericComponent implements OnInit {
  constructor(private location: Location, private dialogService: DialogService) {}

  ngOnInit(): void {}

  back(): void {
    this.dialogService.back();
  }

}
