import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BalAccordionModule,
  BalBadgeModule,
  BalButtonModule,
  BalCoreModule,
  BalFieldModule,
  BalInputModule,
  BalSelectModule,
} from '@baloise/design-system-components-angular';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    BalCoreModule.forRoot(),
    BalBadgeModule,
    BalFieldModule,
    BalInputModule,
    BalSelectModule,
    BalButtonModule,
    BalAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
