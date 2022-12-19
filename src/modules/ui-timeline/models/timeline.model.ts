export class Timeline {
  constructor(public items: TimelineItem[]) {
  }
}

export class TimelineItem {
  yearStart: Date;
  yearEnd: Date;
  company: string;
  title: string;
  technologies: string;

  constructor(data: TimelineItem) {
    this.yearStart = data.yearStart;
    this.yearEnd = data.yearEnd;
    this.company = data.company;
    this.title = data.title;
    this.technologies = data.technologies;
  }
}
