import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Act-card.component.html',
  styleUrls: ['./Act-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Act-card]': 'true'
  }
})

export class ActCardComponent {


}