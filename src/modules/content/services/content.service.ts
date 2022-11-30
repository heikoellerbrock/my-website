import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly experience = [
    {
      yearStart: new Date(2011, 5),
      yearEnd: new Date(),
      companyName: 'Selbständiger Softwareentwickler',
      workTitle: '',
      workDescription: 'Unterstützung kleiner bis großer Unternehmen durch Beratung, Planung und Umsetzung ihrer Web-Projekte.'
    },
    {
      yearStart: new Date(2019, 9),
      yearEnd: new Date(2021, 11),
      companyName: 'brandung GmbH',
      workTitle: 'Business Director',
      workDescription: 'Betriebswirtschaftliche, disziplinarische und fachliche Leitung eines ca. zwanzigköpfigen Teams in ' +
        'der Webentwicklung. Technische Verantwortung bei der Planung und Integration von Applikationen in bestehende ' +
        'System-Architekturen. Unterstützung der Geschäftsführung hinsichtlich strategischer Ausrichtung des Teams.'
    },
    {
      yearStart: new Date(2018, 11),
      yearEnd: new Date(2019, 9),
      companyName: 'brandung GmbH',
      workTitle: 'Teamleiter Frontend',
      workDescription: 'Fachliche Leitung eines ca. siebenköpfigen Teams von Entwicklern im Bereich Frontend.'
    },
    {
      yearStart: new Date(2017, 6),
      yearEnd: new Date(2018, 10),
      companyName: 'dimedis GmbH',
      workTitle: 'Teamleiter Frontend',
      workDescription: 'Fachliche Leitung eines ca. siebenköpfigen Teams von Entwicklern im Bereich Frontend.'
    },
    {
      yearStart: new Date(2016, 11),
      yearEnd: new Date(2017, 5),
      companyName: 'meinestadt GmbH',
      workTitle: 'Webentwickler Frontend',
      workDescription: 'Frontend'
    },
    {
      yearStart: new Date(2016, 2),
      yearEnd: new Date(2016, 10),
      companyName: 'Moneymeets GmbH',
      workTitle: 'Webentwickler Frontend',
      workDescription: 'Frontend'
    },
    {
      yearStart: new Date(2013, 6),
      yearEnd: new Date(2016, 1),
      companyName: 'Kienbaum Consultants International GmbH',
      workTitle: 'Webentwickler Frontend',
      workDescription: 'Frontend'
    },
    {
      yearStart: new Date(2005, 5),
      yearEnd: new Date(2010, 4),
      companyName: 'ifa Systems GmbH',
      workTitle: 'Projektmanager international',
      workDescription: 'Betreuung von Kunden und Projekten regional und überregional im Bereich Ophthalmologie.'
    }
  ];

  get workExperience() {
    return this.experience;
  }
}
