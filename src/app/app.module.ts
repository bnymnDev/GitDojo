import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DojoComponent } from './dojo/dojo.component';

@NgModule({
  declarations: [
    AppComponent,
    DojoComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
