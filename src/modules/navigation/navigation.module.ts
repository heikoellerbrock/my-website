import {NgModule} from '@angular/core';
import {NavigationComponent} from './components/navigation/navigation.component';
import {WindowScrollService} from './services/window-scroll.service';
import {CommonModule} from '@angular/common';
import {MobileMenuComponent} from './components/mobile-menu/mobile-menu.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavigationComponent,
    MobileMenuComponent,
    MainMenuComponent
  ],
  providers: [
    WindowScrollService
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
