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
  form: FormGroup;
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
      name: 'hairColor',
      label: 'Hair Color',
      options: ['Blue', 'Red', 'Blonde', 'Black', 'Brown'],
    },
    {
      control: this.fb.control(''),
      type: 'select',
      name: 'skinColor',
      label: 'Skin Color',
      options: ['White', 'Green', 'Blue', 'Black'],
    },
    {
      control: this.fb.control(''),
      type: 'select',
      name: 'eyeColor',
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

  isFormSubmitted = false;
  //isFormValid = () => this.isFormSubmitted || !this.form?.dirty;
  isFormValid = false;
  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fields: this.fb.array([]),
    });

    this.fields.forEach((field) => {
      const control = this.fb.control('');
      (this.form.get('fields') as FormArray).push(control);
    });
  }

  onSave() {
    if (this.form.valid) {
      this.isFormValid = true;
      this.peopleService.addPerson(this.form.value);
      console.log(this.form);
      this.router.navigate([`admin/table`]);
    }
    console.log(this.form);
  }

  back(item): void {
    this.peopleService.back();
  }
}
