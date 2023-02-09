import { FormControl } from '@angular/forms';

export interface GenericFormField {
  formFieldID: string,
  FormControl: FormControl,
  title: string,
  placeholder: string,
  value?: string | number | string[],
  required: boolean,
  disabled: boolean,
  validations: FormFieldValidation[],
  // fieldType: FormFieldTypeEnum,
  // fieldDataType?: InputDataTypes,
  selectItems?: {
    label: string,
    value: string
  }[]
}

export interface FormFieldValidation {
  validationType: string,
  errorMessage: string
}
