import { DialogService } from '../../../services/dialog.service';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  @Input() fields: any[];

  isFormValid = false;
  constructor(private dialogService: DialogService, private fb: FormBuilder, private peopleService: PeopleService, private router: Router, private fbD: FormGroupDirective) {
  }
  ngOnInit(): void {
    console.log(this.fields)

  }
  back(): void {
    this.peopleService.back();
  }
}
