import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VCardComponent} from './components/v-card/v-card.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ServicesComponent} from './components/services/services.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {WorkingExperienceComponent} from './components/working-experience/working-experience.component';
import {EducationComponent} from './components/education/education.component';
import {SkillsComponent} from './components/skills/skills.component';
import {UiTimelineModule} from '../ui-timeline/ui-timeline.module';
import {UiFloatingBarModule} from '../ui-floating-bar/ui-floating-bar.module';

@NgModule({
  imports: [
    CommonModule,
    UiTimelineModule,
    UiFloatingBarModule
  ],
  declarations: [
    VCardComponent,
    AboutMeComponent,
    ServicesComponent,
    PortfolioComponent,
    WorkingExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  exports: [
    VCardComponent,
    AboutMeComponent,
    ServicesComponent,
    PortfolioComponent,
    SkillsComponent,
    WorkingExperienceComponent,
    EducationComponent
  ]
})
export class ContentModule {
}
