import { DialogService } from '../../../services/dialog.service';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;

  @Input() formData: FormGroup;

  //hobbies = new FormControl('');
  // hobbiesList: string[] = ['Cooking', 'Painting', 'Tenis', 'Soccer', 'Sleeping', 'Singing', 'Shopping', 'Gaming', 'Hiking', 'Swimming', 'Boxing', 'Riding', 'Eating', 'Drawing', 'Brainstorming', 'Music', 'Dance', 'Movies'];
  // addForm!: FormGroup;
  // isFormSubmitted = false;
  // isFormValid = () => this.isFormSubmitted || !this.addForm?.dirty;
  // isFormValid = false;
  constructor(private dialogService: DialogService, private fb: FormBuilder, private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    // this.addForm = this.fb.group({
    //   name: ["", [Validators.required]],
    //   height: ["", [Validators.required]],
    //   mass: ["", [Validators.required]],
    //   hair_color: ["", [Validators.required]],
    //   skin_color: ["", [Validators.required]],
    //   eye_color: ["", [Validators.required]],
    //   birth_year: ["", [Validators.required]],
    //   gender: ["", [Validators.required]],
    //   homeworld: ["", [Validators.required]],
    //   hobbies: ["", [Validators.required]],
    // });
  }

  displayErrors(){
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }


  // onSave() {
  //   if(this.addForm.valid) {
  //     this.isFormValid = true;
  //     this.peopleService.addPerson(this.addForm.value);
  //     console.log(this.addForm);
  //     this.router.navigate([`admin/table`]);
  //   }
  //   console.log(this.addForm);
  // }

  // back(item): void {
  //   this.peopleService.back();
  // }

}
