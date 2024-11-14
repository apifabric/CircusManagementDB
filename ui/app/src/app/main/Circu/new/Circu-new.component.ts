import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Circu-new',
  templateUrl: './Circu-new.component.html',
  styleUrls: ['./Circu-new.component.scss']
})
export class CircuNewComponent {
  @ViewChild("CircuForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}