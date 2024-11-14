import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CARETAKERANIMALASSOCIATION_MODULE_DECLARATIONS, CaretakerAnimalAssociationRoutingModule} from  './CaretakerAnimalAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CaretakerAnimalAssociationRoutingModule
  ],
  declarations: CARETAKERANIMALASSOCIATION_MODULE_DECLARATIONS,
  exports: CARETAKERANIMALASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaretakerAnimalAssociationModule { }