import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-board',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, FormsModule],
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css'
})
export class ViewBoardComponent implements OnInit {

  boardIndex: any = 1;
  boardtTitle: string = "";
  constructor(private route: ActivatedRoute,
    public boardService: BoardService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardtTitle = this.boardService.boards[this.boardIndex].title;
  }

  openNewCardDialog() {
    const dialogref = this.matDialog.open(ViewBoardDialogComponent, {
      width: '500px',
      data: { boardIndex: this.boardIndex, editMode: false }
    });
  }

  editCard(indexCard: number, card: any) {
    const dialogref = this.matDialog.open(ViewBoardDialogComponent, {
      width: '500px',
      data: { boardIndex: this.boardIndex, editMode: true, cardIndex: indexCard }
    });
  }

  deleteCard(indexCard: number) {
    this.boardService.boards[this.boardIndex].cards.splice(indexCard, 1);
    this.boardService.updateDataToLocalStorage();
  }
}
