import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basic.directive';
import { AdvanceCssDirective } from './shared/directives/advanceCss.directive';
import { ToLowecaseDirective } from './shared/directives/to-lowecase.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    AdvanceCssDirective,
    ToLowecaseDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
