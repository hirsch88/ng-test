import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalButtonModule,
  BalCoreModule,
  BalFieldModule,
  BalInputModule,
} from '@baloise/design-system-components-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Enables the Design System globally for your application
    BalCoreModule.forRoot(),
    // Import the Design System components
    BalButtonModule,
    BalInputModule,
    BalFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
