import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  private readonly experience = [
    {
      yearStart: new Date(2021, 9),
      yearEnd: new Date(),
      company: "Selbständig",
      title: "Freelancer Frontend Developer",
      technologies: "siehe Technologien und letzte Projekte"
    },
    {
      yearStart: new Date(2011, 5),
      yearEnd: new Date(2021, 8),
      company: "Selbständig",
      title: "Freelancer Webentwicklung",
      technologies: "Angular, JavaScript (ES5/6), HTML 5, CSS 3, SCSS, NodeJS, Wordpress"
    },
    {
      yearStart: new Date(2019, 9),
      yearEnd: new Date(2021, 11),
      company: "brandung GmbH",
      title: "Business Director",
      technologies: "siehe Technologien und letzte Projekte"
    },
    {
      yearStart: new Date(2018, 11),
      yearEnd: new Date(2019, 9),
      company: "brandung GmbH",
      title: "Teamleiter Frontend",
      technologies: "siehe Technologien und letzte Projekte"
    },
    {
      yearStart: new Date(2017, 6),
      yearEnd: new Date(2018, 10),
      company: "dimedis GmbH",
      title: "Teamleiter Frontend",
      technologies: "Angular, JavaScript (ES6), HTML 5, CSS 3, SCSS, Webpack"
    },
    {
      yearStart: new Date(2016, 11),
      yearEnd: new Date(2017, 5),
      company: "meinestadt GmbH",
      title: "Webentwickler Frontend",
      technologies: "Angular, JavaScript (ES6), HTML 5, CSS 3, SCSS, Java"
    },
    {
      yearStart: new Date(2016, 2),
      yearEnd: new Date(2016, 10),
      company: "Moneymeets GmbH",
      title: "Webentwickler Frontend",
      technologies: "Angular, JavaScript (ES6), HTML, CSS, SCSS"
    },
    {
      yearStart: new Date(2013, 6),
      yearEnd: new Date(2016, 1),
      company: "Kienbaum Consultants International GmbH",
      title: "Webentwickler Frontend",
      technologies: "C#, AngularJS, JavaScript (ES5), HTML, CSS, SCSS"
    },
    {
      yearStart: new Date(2005, 5),
      yearEnd: new Date(2010, 4),
      company: "ifa Systems GmbH",
      title: "Projektmanager international"
    }
  ];

  get workExperience() {
    return this.experience;
  }
}
