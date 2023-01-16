import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { ZigzagComponent } from "./zigzag/zigzag.component";

const routes: Routes = [
  { path: '', redirectTo: 'zigzag', pathMatch: 'full' },
  { path: 'zigzag', component: ZigzagComponent },
  { path: 'fizzbuzz', component: FizzbuzzComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
