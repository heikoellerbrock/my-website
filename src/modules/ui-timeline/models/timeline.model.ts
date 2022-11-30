export class Timeline {
  constructor(public items: TimelineItem[]) {
  }
}

export class TimelineItem {
  yearStart: Date;
  yearEnd: Date;
  companyName: string;
  workTitle: string;
  workDescription: string;

  constructor(data: TimelineItem) {
    this.yearStart = data.yearStart;
    this.yearEnd = data.yearEnd;
    this.companyName = data.companyName;
    this.workTitle = data.workTitle;
    this.workDescription = data.workDescription;
  }
}
