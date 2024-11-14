import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Circu-card.component.html',
  styleUrls: ['./Circu-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Circu-card]': 'true'
  }
})

export class CircuCardComponent {


}