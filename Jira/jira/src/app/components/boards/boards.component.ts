import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';
import { BoardService } from '../../services/board.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {

  constructor(private matDialog: MatDialog, public boardService: BoardService) {

  }

  openNewBoardDialog() {
    const dialogref = this.matDialog.open(BoardsDialogComponent, {
      width: '500px'
    });
  }

  deleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }
}
