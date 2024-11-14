import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PERFORMERACTASSOCIATION_MODULE_DECLARATIONS, PerformerActAssociationRoutingModule} from  './PerformerActAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PerformerActAssociationRoutingModule
  ],
  declarations: PERFORMERACTASSOCIATION_MODULE_DECLARATIONS,
  exports: PERFORMERACTASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerformerActAssociationModule { }