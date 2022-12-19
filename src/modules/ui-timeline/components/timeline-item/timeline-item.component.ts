import { Component, Input } from "@angular/core";
import { TimelineItem } from "../../models/timeline.model";

@Component({
  selector: "app-timeline-item",
  templateUrl: "./timeline-item.component.html",
  styleUrls: ["./timeline-item.component.scss"]
})
export class TimelineItemComponent {
  @Input() item!: TimelineItem;

  monthsDE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

  displayDate(date: Date) {
    let m = date.getMonth();
    if (date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      return "heute";
    }
    return `${this.monthsDE[m]} ${date.getFullYear()}`;
  }
}
