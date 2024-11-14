import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShowEquipmentAssociation-new',
  templateUrl: './ShowEquipmentAssociation-new.component.html',
  styleUrls: ['./ShowEquipmentAssociation-new.component.scss']
})
export class ShowEquipmentAssociationNewComponent {
  @ViewChild("ShowEquipmentAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}