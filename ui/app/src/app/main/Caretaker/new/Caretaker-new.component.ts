import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Caretaker-new',
  templateUrl: './Caretaker-new.component.html',
  styleUrls: ['./Caretaker-new.component.scss']
})
export class CaretakerNewComponent {
  @ViewChild("CaretakerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}