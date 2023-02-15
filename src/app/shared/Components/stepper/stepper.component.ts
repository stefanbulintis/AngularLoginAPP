// import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, TemplateRef, AfterContentInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// interface Step {
//   label: string;
//   form: FormGroup;
//   template: TemplateRef<any>;
// }

// @Component({
//   selector: 'app-stepper',
//   templateUrl: './stepper.component.html',
//   styleUrls: ['./stepper.component.scss']
// })
// export class StepperComponent implements AfterContentInit {
//   @Input() linear: boolean = false;
//   @Input() orientation: 'horizontal' | 'vertical' = 'vertical';
//   @Output() onSubmit = new EventEmitter<any>();
//   @ContentChildren('stepTemplate') stepTemplates: QueryList<TemplateRef<any>>;
//   steps: Step[] = [];
//   activeIndex: number = 0;
//   form: FormGroup = new FormGroup({});

//   ngAfterContentInit() {
//     this.stepTemplates.forEach((template, index) => {
//       const form = new FormGroup({});
//       this.steps.push({
//         label: `Step ${index + 1}`,
//         form: form,
//         template: template
//       });
//       this.form.addControl(`step${index + 1}`, form);
//     });
//   }

//   prev() {
//     this.activeIndex--;
//   }

//   next() {
//     this.activeIndex++;
//   }

//   submit() {
//     this.onSubmit.emit(this.form.value);
//   }
// }
//   firstFormGroup = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   secondFormGroup = this._formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   });
//   isLinear = false;

//   constructor(private _formBuilder: FormBuilder) {}
//}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() steps: any[];
@Output() stepChange = new EventEmitter<number>();

stepIndex = 0;
selectedOption: string;
chartData = [  { data: [30, 50, 20, 80], label: 'Series A' },
  { data: [50, 20, 70, 10], label: 'Series B' },
  { data: [10, 30, 40, 90], label: 'Series C' }
];
chartOptions = {
  responsive: true,
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }]
  }
};



tableData: any[];
formValues: any = {};
firstName: string;
lastName: string;
email: string;
name: string;
surname: string;
constructor() {}

selectStep(stepper: MatStepper, index: number) {
  stepper.selectedIndex = index;
  this.stepIndex = index;
  this.stepChange.emit(this.stepIndex);
}

onStepChange(event: any) {
  this.stepIndex = event.selectedIndex;
}

onSubmit() {
  console.log('Form submitted:', this.formValues);
}

addRow() {
  this.tableData.push({});
}

removeRow(index: number) {
  this.tableData.splice(index, 1);
}
}
