import { Component } from '@angular/core';
import { DividerComponent } from "../shared/divider/divider.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DividerComponent, StatisticComponent, ItemListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title: string = "Genel Bilgiler";
  title2: string = "Ürünler";

  datas: any = [
    { value: 50, label: "Müşteri" },
    { value: 3500, label: "Ciro" },
    { value: 65, label: "Yorumlar" },
  ]

  items = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her türlü eşyanızı koyabileceğiniz şifonyer'
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Oturması muhteşem rahat koltuk'
    }
  ]
}
