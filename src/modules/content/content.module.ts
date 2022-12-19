import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VCardComponent } from "./components/v-card/v-card.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ServicesComponent } from "./components/services/services.component";
import { WorkingExperienceComponent } from "./components/working-experience/working-experience.component";
import { EducationComponent } from "./components/education/education.component";
import { UiTimelineModule } from "../ui-timeline/ui-timeline.module";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";

@NgModule({
  imports: [
    CommonModule,
    UiTimelineModule
  ],
  declarations: [
    VCardComponent,
    AboutMeComponent,
    ServicesComponent,
    ProjectListComponent,
    WorkingExperienceComponent,
    EducationComponent,
    TechnologiesComponent
  ],
  exports: [
    VCardComponent,
    AboutMeComponent,
    ServicesComponent,
    ProjectListComponent,
    TechnologiesComponent,
    WorkingExperienceComponent,
    EducationComponent
  ]
})
export class ContentModule {
}
