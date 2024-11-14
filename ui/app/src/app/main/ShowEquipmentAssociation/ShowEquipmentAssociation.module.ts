import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHOWEQUIPMENTASSOCIATION_MODULE_DECLARATIONS, ShowEquipmentAssociationRoutingModule} from  './ShowEquipmentAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShowEquipmentAssociationRoutingModule
  ],
  declarations: SHOWEQUIPMENTASSOCIATION_MODULE_DECLARATIONS,
  exports: SHOWEQUIPMENTASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowEquipmentAssociationModule { }