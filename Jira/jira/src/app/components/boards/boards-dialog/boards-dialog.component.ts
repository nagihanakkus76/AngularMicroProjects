import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoardService } from '../../../services/board.service';


@Component({
  selector: 'app-boards-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './boards-dialog.component.html',
  styleUrl: './boards-dialog.component.css'
})
export class BoardsDialogComponent {

  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, private boardService: BoardService) {
  }

  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

  close() {
    this.dialogRef.close();
  }

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value);
    this.close();
  }
}
