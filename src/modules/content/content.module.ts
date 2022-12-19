import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VCardComponent } from "./components/v-card/v-card.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ServicesComponent } from "./components/services/services.component";
import { WorkingExperienceComponent } from "./components/working-experience/working-experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { UiTimelineModule } from "../ui-timeline/ui-timeline.module";
import { UiFloatingBarModule } from "../ui-floating-bar/ui-floating-bar.module";
import { ProjectListComponent } from "./components/project-list/project-list.component";

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
    ProjectListComponent,
    WorkingExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  exports: [
    VCardComponent,
    AboutMeComponent,
    ServicesComponent,
    ProjectListComponent,
    SkillsComponent,
    WorkingExperienceComponent,
    EducationComponent
  ]
})
export class ContentModule {
}
