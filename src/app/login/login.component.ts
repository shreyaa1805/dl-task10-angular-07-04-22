import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrationForm: FormGroup;
  submitted:boolean=false;
  
  constructor(private fb: FormBuilder) {
     this.registrationForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phoneNumber: [
        '',
        [
            Validators.required,
            Validators.min(1000000000),
            Validators.max(9999999999),
        ],
    ],
     });
}
ngOnInit(): void {
  }

}
