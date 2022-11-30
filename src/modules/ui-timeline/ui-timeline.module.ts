import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelineComponent
  ]
})
export class UiTimelineModule {
}
