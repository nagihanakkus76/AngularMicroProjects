import { Routes } from '@angular/router';
import { BoardsComponent } from './components/boards/boards.component';
import { ViewBoardComponent } from './components/view-board/view-board.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full'
  },
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'view-board/:boardIndex',
    component: ViewBoardComponent
  }
];
