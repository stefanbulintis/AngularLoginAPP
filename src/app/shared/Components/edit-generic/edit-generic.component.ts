import { DialogService } from '../../../services/dialog.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { DialogGenericComponent } from '../dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-edit-generic',
  templateUrl: './edit-generic.component.html',
  styleUrls: ['./edit-generic.component.scss']
})
export class EditGenericComponent implements OnInit {
  @Input() fields: any[];
  isFormSubmitted = false;
  // isFormValid = () => this.isFormSubmitted || !this.addForm?.dirty;
  isFormValid = false;
  id: number;

  constructor(private dialogService: DialogService,private fb: FormBuilder, private peopleService: PeopleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  back(): void {
    this.peopleService.back();
  }

}
