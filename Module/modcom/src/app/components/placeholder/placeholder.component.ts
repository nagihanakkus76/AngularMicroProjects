import { Component } from '@angular/core';
import { DividerComponent } from '../shared/divider/divider.component';
import { SegmentComponent } from "../segment/segment.component";

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [DividerComponent, SegmentComponent],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  title: string = "Placeholder";
  title2: string = "Segment";
}
