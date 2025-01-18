import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-table',
  standalone: true,
  imports: [],
  templateUrl: './survey-table.component.html',
  styleUrl: './survey-table.component.css'
})
export class SurveyTableComponent {
  datas = [
    {
      isPleased: "Hayır",
      name: "Can",
      surname: "Boz",
      age: 29,
      job: "Endüstri Mühendisi"
    },
    {
      isPleased: "Hayır",
      name: "Osman",
      surname: "Çimen",
      age: 30,
      job: "Yazılım Mühendisi"
    },
    {
      isPleased: "Evet",
      name: "Elif",
      surname: "Gül",
      age: 27,
      job: "İşletme Mezunu"
    },
  ]
}
