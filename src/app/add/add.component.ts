import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { DialogRef } from '@angular/cdk/dialog';

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

  constructor(private fb: FormBuilder, private service:ServiceService, private dialogref:DialogRef<AddComponent>){
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
      // console.warn(this.empForm.value)
      this.service.addEmployee(this.empForm.value).subscribe({
        next :(val:any)=>{
          alert("Employee has been Added! Successfully")
          this.dialogref.close()
        },
        error: (err:any)=>{
          alert(err)
        }
        
      })


    }
  }


}


