import {Component, HostBinding, Input} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  @HostBinding('class.isTransparent') transparent = this.isTransparent;
  @HostBinding('class.isOpen') open = false;

  constructor(private navigationService: NavigationService) {
  }

  get menuLinks() {
    return this.navigationService.menuLinks
  }

  /**
   * Passed in property to change color of Button depending to transparency of complete navigation
   */
  @Input()
  set isTransparent(val: boolean) {
    this.transparent = val;
  }

  toogleMenu() {
    this.open = !this.open;
  }

}
