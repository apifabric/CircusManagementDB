import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShowEquipmentAssociation-card.component.html',
  styleUrls: ['./ShowEquipmentAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShowEquipmentAssociation-card]': 'true'
  }
})

export class ShowEquipmentAssociationCardComponent {


}