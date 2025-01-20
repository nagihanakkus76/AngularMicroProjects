import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../shared/input/input.component";
import { DateFormControl } from '../../date-form-control';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl(null, [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
  })

  name: FormControl = this.cardForm.get('name') as FormControl;
  cardNumber: FormControl = this.cardForm.get('cardNumber') as FormControl;
  expiration: FormControl = this.cardForm.get('expiration') as FormControl;
  securityCode: FormControl = this.cardForm.get('securityCode') as FormControl;

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  resetForm() {
    this.cardForm.reset();
  }
}
