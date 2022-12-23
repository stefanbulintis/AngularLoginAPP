import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {

  addForm!: FormGroup;
  isFormSubmitted = false;
  // isFormValid = () => this.isFormSubmitted || !this.addForm?.dirty;
  isFormValid = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      height: ["", [Validators.required]],
      mass: ["", [Validators.required]],
      hair_color: ["", [Validators.required]],
      skin_color: ["", [Validators.required]],
      eye_color: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      homeworld: ["", [Validators.required]],
    });
  }

  onSave() {
    if(this.addForm.valid) {
      console.log(this.addForm.value);
    }
  }
}
