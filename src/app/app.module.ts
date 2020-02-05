import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Listen01Component } from './components/listen01/listen01.component';
import { Listen02Component } from './components/listen02/listen02.component';
import { Listen03Component } from './components/listen03/listen03.component';
import { Listen04Component } from './components/listen04/listen04.component';
import { Listen05Component } from './components/listen05/listen05.component';
import { StartComponent } from './components/start/start.component';
import { Listen06Component } from './components/listen06/listen06.component';
import { Listen08Component } from './components/listen08/listen08.component';

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
    Listen08Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgPipesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
