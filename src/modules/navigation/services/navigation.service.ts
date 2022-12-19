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
      title: 'Persönliches'
    },
    {
      title: 'Technologien'
    },
    {
      title: 'Dienstleistungen'
    },
    {
      title: 'Projekte'
    },
    {
      title: 'Beruflicher Werdegang'
    },
    {
      title: 'Ausbildung'
    }
  ]

  get menuLinks(): { title: string }[] {
    return this.links;
  }
}
