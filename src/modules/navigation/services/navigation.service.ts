import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly links = [
    {
      title: 'V-Card'
    },
    {
      title: 'Über mich'
    },
    {
      title: 'Skills'
    },
    {
      title: 'Services'
    },
    {
      title: 'Portfolio'
    },
    {
      title: 'Berufserfahrung'
    },
    {
      title: 'Berufsausbildung'
    }
  ]

  get menuLinks(): { title: string }[] {
    return this.links;
  }
}
