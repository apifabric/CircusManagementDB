import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Show-card.component.html',
  styleUrls: ['./Show-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Show-card]': 'true'
  }
})

export class ShowCardComponent {


}