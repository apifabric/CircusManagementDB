import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AnimalShowAssociation-card.component.html',
  styleUrls: ['./AnimalShowAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AnimalShowAssociation-card]': 'true'
  }
})

export class AnimalShowAssociationCardComponent {


}