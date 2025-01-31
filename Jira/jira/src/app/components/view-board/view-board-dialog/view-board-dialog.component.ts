import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BoardService } from '../../../services/board.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-board-dialog',
  standalone: true,
  imports: [MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './view-board-dialog.component.html',
  styleUrl: './view-board-dialog.component.css'
})
export class ViewBoardDialogComponent implements OnInit {

  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];

  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>,
    private boardService: BoardService, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.data.editMode) {
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksLoop.splice(index, 1);
  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false)
  }

  close() {
    this.dialogRef.close();
  }

  create() {
    if (this.tasks.some((element: string) => element === "")) {
      this.snackbar.open("Yeni Taskı Giriniz", "Ok");
    } else {
      if (!this.data.editMode) {
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      }
      else {
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;
      }
      this.boardService.updateDataToLocalStorage();
      this.close();
    }
  }
}
