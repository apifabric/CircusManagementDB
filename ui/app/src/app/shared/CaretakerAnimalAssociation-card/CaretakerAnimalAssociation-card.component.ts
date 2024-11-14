import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CaretakerAnimalAssociation-card.component.html',
  styleUrls: ['./CaretakerAnimalAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CaretakerAnimalAssociation-card]': 'true'
  }
})

export class CaretakerAnimalAssociationCardComponent {


}