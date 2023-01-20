import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { ZigzagComponent } from "./zigzag/zigzag.component";
import {OptasweeperComponent} from "./optasweeper/optasweeper.component";

const routes: Routes = [
  { path: '', redirectTo: 'zigzag', pathMatch: 'full' },
  { path: 'zigzag', component: ZigzagComponent },
  { path: 'fizzbuzz', component: FizzbuzzComponent },
  { path: 'optasweeper', component: OptasweeperComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
