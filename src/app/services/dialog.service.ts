import { MatDialog } from '@angular/material/dialog';
import { DialogGenericComponent } from './../shared/dialog-generic/dialog-generic.component';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  list = ['a', 'b', 'c', 'd'];
  constructor(private location: Location, public dialog: MatDialog) { }

  back(): void {
    this.location.back();
  }

}


