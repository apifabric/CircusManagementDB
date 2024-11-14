import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PerformerActAssociation-new',
  templateUrl: './PerformerActAssociation-new.component.html',
  styleUrls: ['./PerformerActAssociation-new.component.scss']
})
export class PerformerActAssociationNewComponent {
  @ViewChild("PerformerActAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}