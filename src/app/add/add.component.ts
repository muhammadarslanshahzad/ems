import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  empForm: FormGroup;

  education: string[] = [
    'High School Diploma',
    "Post High School Diploma",
    "Bachelor",
    "Master",
    "Doctrate"];

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''

    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.warn(this.empForm.value)
    }
  }


}


