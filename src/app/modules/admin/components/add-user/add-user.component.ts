import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  //isFormSubmitted = false;
  isFormValid = false;
  fields: any[] = [
    {
      control: this.fb.control(''),
      type: 'input',
      name: 'name',
      label: 'Name',
    },
    {
      control: this.fb.control(''),
      type: 'input',
      name: 'height',
      label: 'Height',
    },
    {
      control: this.fb.control(''),
      type: 'input',
      name: 'mass',
      label: 'Mass',
    },
    {
      control: this.fb.control(''),
      type: 'select',
      name: 'hair_color',
      label: 'Hair Color',
      options: ['Blue', 'Red', 'Blonde', 'Black', 'Brown'],
    },
    {
      control: this.fb.control(''),
      type: 'select',
      name: 'skin_color',
      label: 'Skin Color',
      options: ['White', 'Green', 'Blue', 'Black'],
    },
    {
      control: this.fb.control(''),
      type: 'select',
      name: 'eye_color',
      label: 'Eye Color',
      options: ['Blue', 'Red', 'Green', 'Black', 'Brown'],
    },
    {
      control: this.fb.control(''),
      type: 'select',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female', 'N/A'],
    },

    {
      control: this.fb.control(''),
      type: 'multi-select',
      label: 'Hobbies',
      name: 'hobbies',
      options: [
        'Cooking',
        'Painting',
        'Tenis',
        'Soccer',
        'Sleeping',
        'Singing',
        'Shopping',
        'Gaming',
        'Hiking',
        'Swimming',
        'Boxing',
        'Riding',
        'Eating',
        'Drawing',
        'Brainstorming',
        'Music',
        'Dance',
        'Movies',
      ],
    },

    {
      control: this.fb.control(''),
      type: 'input',
      name: 'homeworld',
      label: 'Homeworld',
    },

    {
      control: this.fb.control(''),
      type: 'matDatepicker',
      label: 'Birth Date',
      name: 'birthday',
    },
  ];


  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({});

    this.fields.forEach((field) => {
      this.addForm.addControl(field.name, field.control)
    });
  }

  onSave() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      console.log(this.addForm)
      this.isFormValid = true;
      this.peopleService.addPerson(this.addForm.value);
      console.log(this.addForm);
      this.router.navigate([`admin/table`]);
    }
  }

  back(item): void {
    this.peopleService.back();
  }
}
