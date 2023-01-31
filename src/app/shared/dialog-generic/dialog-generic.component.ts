import { PeopleService } from './../../services/people.service';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dialog-generic',
  templateUrl: './dialog-generic.component.html',
  styleUrls: ['./dialog-generic.component.scss']
})
export class DialogGenericComponent implements OnInit {

  constructor(private peopleService: PeopleService, private location: Location, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogGenericComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }
  openDialog(): void {
    this.dialog.open(DialogGenericComponent)
  }


}
