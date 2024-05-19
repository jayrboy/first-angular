import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { countries } from './data';
import { CommonModule, JsonPipe } from '@angular/common';
import FormObj from '../../models/formobj.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    JsonPipe,
    CommonModule
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  formObj: FormObj = {
    id: 0,
    email: '',
    password: '',
    passwordCf: '',
    firstName: '',
    lastName: '',
    address: '',
    tel: 0,
    city: '',
    state: '',
    postalCode: 0,
  };

  countries = countries;

  hide = true;

  onSubmit = () => {
    console.log(this.formObj);
  };
}
