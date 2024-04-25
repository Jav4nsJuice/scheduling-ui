import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
