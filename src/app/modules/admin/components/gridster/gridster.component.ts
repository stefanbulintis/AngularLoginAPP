import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogGenericComponent } from 'src/app/shared/Components/dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.scss']
})
export class GridsterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    let data = {
      msg: "Message from GridsterComponent"
    }
    const dialogRef = this.dialog.open(DialogGenericComponent, {
      data: data,
      width: '600px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  ngOnInit(): void {
  }

}
