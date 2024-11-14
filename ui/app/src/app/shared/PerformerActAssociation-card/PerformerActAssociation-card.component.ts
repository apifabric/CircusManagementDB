import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PerformerActAssociation-card.component.html',
  styleUrls: ['./PerformerActAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PerformerActAssociation-card]': 'true'
  }
})

export class PerformerActAssociationCardComponent {


}