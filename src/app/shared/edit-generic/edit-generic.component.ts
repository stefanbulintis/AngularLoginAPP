import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit-generic',
  templateUrl: './edit-generic.component.html',
  styleUrls: ['./edit-generic.component.scss']
})
export class EditGenericComponent implements OnInit {
  hobbiesList: string[] = ['Cooking', 'Painting', 'Tenis', 'Soccer', 'Sleeping', 'Singing', 'Shopping', 'Gaming', 'Hiking', 'Swimming', 'Boxing', 'Riding', 'Eating', 'Drawing', 'Brainstorming', 'Music', 'Dance', 'Movies'];
  editForm!: FormGroup;
  isFormSubmitted = false;
  // isFormValid = () => this.isFormSubmitted || !this.addForm?.dirty;
  isFormValid = false;
  id: number;

  constructor(private fb: FormBuilder, private peopleService: PeopleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ["", [Validators.required]],
      height: ["", [Validators.required]],
      mass: ["", [Validators.required]],
      hair_color: ["", [Validators.required]],
      skin_color: ["", [Validators.required]],
      eye_color: ["", [Validators.required]],
      birth_year: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      homeworld: ["", [Validators.required]],
      hobbies: ["", [Validators.required]],
    });

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }

  onUpdate() {
    if(this.editForm.valid) {
      this.isFormValid = true;
      this.peopleService.updatePerson(this.id, this.editForm.value);
      console.log(this.editForm);
      this.router.navigate([`admin/table`]);
    }
    console.log(this.editForm);
  }
}
