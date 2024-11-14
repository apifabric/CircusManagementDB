import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CaretakerAnimalAssociation-new',
  templateUrl: './CaretakerAnimalAssociation-new.component.html',
  styleUrls: ['./CaretakerAnimalAssociation-new.component.scss']
})
export class CaretakerAnimalAssociationNewComponent {
  @ViewChild("CaretakerAnimalAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}