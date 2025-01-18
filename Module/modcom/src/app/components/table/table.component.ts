import { Component } from '@angular/core';
import { DividerComponent } from '../shared/divider/divider.component';
import { TabsComponent } from "./tabs/tabs.component";
import { SurveyTableComponent } from "./survey-table/survey-table.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DividerComponent, TabsComponent, SurveyTableComponent,RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  title: string = "Memnuniyet Anketi";
  title2: string = "Ekstra Bilgiler";
}
