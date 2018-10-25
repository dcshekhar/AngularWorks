import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighliterDirective } from './highliter.directive';
import { Highliter2Directive } from './highliter2.directive';
import { Highliter3Directive } from './highliter3.directive';
import { Highliter4Directive } from './highliter4.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighliterDirective,
    Highliter2Directive,
    Highliter3Directive,
    Highliter4Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
