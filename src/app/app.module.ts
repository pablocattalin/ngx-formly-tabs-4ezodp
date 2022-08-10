import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTabsModule } from 'ngx-formly-tabs';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormlyFieldTabsetComponent } from './mat-tabs/types/tabset';
import { ArrayTypeComponent } from './array.type';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'tabset',
          component: FormlyFieldTabsetComponent,
        },
        { name: 'arrayRepeat', component: ArrayTypeComponent },
      ],
    }),
    FormlyTabsModule,
    FormlyBootstrapModule,
    NgbModule,

    MatTabsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FormlyFieldTabsetComponent,
    ArrayTypeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
