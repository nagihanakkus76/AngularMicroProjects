import { Component } from '@angular/core';
import { DividerComponent } from "../shared/divider/divider.component";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [DividerComponent, ModalComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  modalOpen: boolean = false;
  title: string = "Popup"

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
