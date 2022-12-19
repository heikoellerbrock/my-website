import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent {
  constructor(private navigationService: NavigationService) {
  }

  // TODO: - routerLink to navigation links in mobile and desktop navigation
  get menuLinks() {
    return this.navigationService.menuLinks;
  }
}
