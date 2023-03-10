import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ZigzagComponent } from './zigzag/zigzag.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OptasweeperComponent } from './optasweeper/optasweeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ZigzagComponent,
    NavbarComponent,
    FizzbuzzComponent,
    OptasweeperComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatToolbarModule,
      MatTableModule,
      MatSnackBarModule,
      MatMenuModule,
      MatIconModule,
      BrowserAnimationsModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
