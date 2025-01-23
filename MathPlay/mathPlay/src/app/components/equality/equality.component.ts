import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EqualityValidators } from '../../validators/equality-validators';
import { delay, filter, scan } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './equality.component.html',
  styleUrl: './equality.component.css'
})
export class EqualityComponent {
  seconds: number = 0;

  mathForm: FormGroup = new FormGroup({
    firstNumber: new FormControl(this.generateNumber()),
    secondNumber: new FormControl(this.generateNumber()),
    answer: new FormControl('')
  }, [EqualityValidators.addition('answer', 'firstNumber', 'secondNumber')]
  )

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  ngOnInit() {
    // const startTime:Date = new Date();
    // let numberSolved: number = 0;
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(800),
      scan(acc => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        };
      },
        { numberSolved: 0, startTime: new Date() })
    ).subscribe(({ numberSolved, startTime }) => {
      // numberSolved++;
      this.seconds = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
      this.mathForm.setValue({
        firstNumber: this.generateNumber(),
        secondNumber: this.generateNumber(),
        answer: ''
      });
    })
  }

  generateNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
