import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Caretaker-card.component.html',
  styleUrls: ['./Caretaker-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Caretaker-card]': 'true'
  }
})

export class CaretakerCardComponent {


}