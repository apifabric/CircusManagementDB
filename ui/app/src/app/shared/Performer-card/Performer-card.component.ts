import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Performer-card.component.html',
  styleUrls: ['./Performer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Performer-card]': 'true'
  }
})

export class PerformerCardComponent {


}