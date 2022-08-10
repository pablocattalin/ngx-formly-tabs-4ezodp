import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
  <ng-container *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-field [field]="field"></formly-field>
    </ng-container>
    <div style="margin:30px 0;">
      <button type="button" (click)="add()">{{ to.addText }}</button>
    </div>
  `,
})
export class ArrayTypeComponent extends FieldArrayType {
  ngOnInit() {
    console.log('model', this.model);
    this.field.templateOptions.remove = this.remove.bind(this);
  }
}
