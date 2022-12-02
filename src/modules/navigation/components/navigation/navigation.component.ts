import {Component, HostBinding} from '@angular/core';
import {WindowScrollService} from '../../services/window-scroll.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  /**
   * Class used to set complete Navigation to transparent or colored
   */
  @HostBinding('class.is-scrolled') pageIsScrolled = false;

  constructor(private scrollService: WindowScrollService) {
    scrollService.scroll$.subscribe(
      d => {
        if (d <= 120 && this.pageIsScrolled) {
          this.pageIsScrolled = false;
        }
        if (d > 120 && !this.pageIsScrolled) {
          this.pageIsScrolled = true;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
