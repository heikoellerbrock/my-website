import { Component, HostBinding } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: "app-mobile-menu",
  templateUrl: "./mobile-menu.component.html",
  styleUrls: ["./mobile-menu.component.scss"]
})
export class MobileMenuComponent {
  @HostBinding("class.isOpen") open = false;

  constructor(private navigationService: NavigationService) {
  }

  get menuLinks() {
    return this.navigationService.menuLinks;
  }

  toogleMenu() {
    this.open = !this.open;
  }

}
