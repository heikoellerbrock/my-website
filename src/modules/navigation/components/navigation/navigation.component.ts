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
  @HostBinding('class.transparent') menuIsTransparent = true;

  constructor(private scrollService: WindowScrollService) {
    scrollService.scroll$.subscribe(
      d => {
        if (d <= 60 && !this.menuIsTransparent) {
          this.menuIsTransparent = true;
        }
        if (d > 60 && this.menuIsTransparent) {
          this.menuIsTransparent = false;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
