import {Component, Input, OnInit} from '@angular/core';
import {Timeline} from '../../models/timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() rawData: any[] = [];
  timeline: Timeline | undefined;

  ngOnInit() {
    this.timeline = new Timeline(this.rawData);
  }

  getClass(index: number) {
    return (index !== 0 && index % 2 !== 0) ? 'right' : 'left';
  }
}
