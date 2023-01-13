import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { DojoComponent } from "./dojo/dojo.component";

const routes: Routes = [
  { path: 'dojo', component: DojoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
