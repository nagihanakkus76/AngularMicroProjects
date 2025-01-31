import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];
  constructor() {
    let str = localStorage.getItem('boards');
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }

  createBoard(title: any) {
    let newBoardObj = {
      title: title,
      cards: []
    }
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  updateDataToLocalStorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  deleteBoard(boardNumber: number) {
    this.boards.splice(boardNumber, 1);
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }
}
