import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DpTooltipComponent } from './components/dp-tooltip/dp-tooltip.component';

@NgModule({
  declarations: [AppComponent, DpTooltipComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
