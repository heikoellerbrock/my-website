import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FloatingBarComponent} from './components/floating-bar/floating-bar.component';

@NgModule({
  declarations: [
    FloatingBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FloatingBarComponent
  ]
})
export class UiFloatingBarModule {
}
