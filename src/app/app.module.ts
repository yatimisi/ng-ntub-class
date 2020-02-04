import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Listen01Component } from './listen01/listen01.component';
import { Listen02Component } from './listen02/listen02.component';
import { Listen03Component } from './listen03/listen03.component';
import { Listen04Component } from './listen04/listen04.component';
import { Listen05Component } from './listen05/listen05.component';
import { StartComponent } from './start/start.component';
import { Listen06Component } from './listen06/listen06.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Listen01Component,
    Listen02Component,
    Listen03Component,
    Listen04Component,
    Listen05Component,
    Listen06Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
