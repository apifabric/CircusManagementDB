import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ANIMALSHOWASSOCIATION_MODULE_DECLARATIONS, AnimalShowAssociationRoutingModule} from  './AnimalShowAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AnimalShowAssociationRoutingModule
  ],
  declarations: ANIMALSHOWASSOCIATION_MODULE_DECLARATIONS,
  exports: ANIMALSHOWASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnimalShowAssociationModule { }