import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Performer-new',
  templateUrl: './Performer-new.component.html',
  styleUrls: ['./Performer-new.component.scss']
})
export class PerformerNewComponent {
  @ViewChild("PerformerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}