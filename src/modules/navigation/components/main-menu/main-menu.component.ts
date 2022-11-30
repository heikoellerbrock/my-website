import {Component, Input} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  /**
   * Passed in property to change color of Button depending to transparency of complete navigation
   */
  @Input() isTransparent = true;

  constructor(private navigationService: NavigationService) {
  }

  get menuLinks() {
    return this.navigationService.menuLinks
  }
}
