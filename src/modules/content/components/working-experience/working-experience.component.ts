import {Component} from '@angular/core';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent {

  constructor(private contentService: ContentService) {
  }

  get workExperience() {
    return this.contentService.workExperience;
  }

}
