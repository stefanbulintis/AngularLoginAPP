import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;

  isFormValid = false;
  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      height: ['', [Validators.required]],
      mass: ['', [Validators.required]],
      hair_color: ['', [Validators.required]],
      skin_color: ['', [Validators.required]],
      eye_color: ['', [Validators.required]],
      birth_year: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      homeworld: ['', [Validators.required]],
      hobbies: ['', [Validators.required]],
    });
  }

  
  onSave() {
    if (this.addForm.valid) {
      this.isFormValid = true;
      this.peopleService.addPerson(this.addForm.value);
      console.log(this.addForm);
      this.router.navigate([`admin/table`]);
    }
    console.log(this.addForm);
  }
}
