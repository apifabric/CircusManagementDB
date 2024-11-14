import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CARETAKER_MODULE_DECLARATIONS, CaretakerRoutingModule} from  './Caretaker-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CaretakerRoutingModule
  ],
  declarations: CARETAKER_MODULE_DECLARATIONS,
  exports: CARETAKER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaretakerModule { }