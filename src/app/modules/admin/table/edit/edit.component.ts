import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
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

  hobbiesList: string[] = ['Cooking', 'Painting', 'Tenis', 'Soccer', 'Sleeping', 'Singing', 'Shopping', 'Gaming', 'Hiking', 'Swimming', 'Boxing', 'Riding', 'Eating', 'Drawing', 'Brainstorming', 'Music', 'Dance', 'Movies'];

  isFormSubmitted = false;
  //isFormValid = () => this.isFormSubmitted || !this.form?.dirty;
  isFormValid = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.fields)
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
    this.editForm = this.fb.group({});

    this.fields.forEach((field) => {
      this.editForm.addControl(field.name, field.control)
    });
  }

  onUpdate() {
    if(this.editForm.valid) {
      console.log(this.editForm)
      this.isFormValid = true;
      this.peopleService.updatePerson(this.id, this.editForm.value);
      console.log(this.editForm);
      this.router.navigate([`admin/table`]);
    }
    //console.log(this. editForm);
  }

  back(item): void {
    this.peopleService.back();
  }
}

