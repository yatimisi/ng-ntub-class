import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Listen01Component } from './listen01/listen01.component';
import { Listen02Component } from './listen02/listen02.component';
import { Listen03Component } from './listen03/listen03.component';
import { Listen04Component } from './listen04/listen04.component';
import { Listen05Component } from './listen05/listen05.component';
import { Listen06Component } from './listen06/listen06.component';
import { Listen08Component } from './listen08/listen08.component';


const routes: Routes = [
  { path: '', redirectTo: 'lon1', pathMatch: 'full'},
  { path: 'lon1', component: Listen01Component },
  { path: 'lon2', component: Listen02Component },
  { path: 'lon3', component: Listen03Component },
  { path: 'lon4', component: Listen04Component },
  { path: 'lon5', component: Listen05Component },
  { path: 'lon6', component: Listen06Component },
  { path: 'lon8', component: Listen08Component },
  { path: '**', component: Listen01Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
