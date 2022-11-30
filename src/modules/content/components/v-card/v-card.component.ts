import {Component} from '@angular/core';

@Component({
  selector: 'app-v-card',
  templateUrl: './v-card.component.html',
  styleUrls: ['./v-card.component.scss']
})
export class VCardComponent {

  getAge() {
    const bDay = new Date('1979-02-26');
    const differenceInMilliseconds = Date.now() - bDay.getTime();
    const dateObject = new Date(differenceInMilliseconds);
    return Math.abs(dateObject.getUTCFullYear() - 1970); // 1970 JS starts Date-counting in Milliseconds
  }

}
