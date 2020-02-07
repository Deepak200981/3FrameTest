import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccrodionData } from './accordionData.service';
import { AccordionComponent } from './accordion/accordion.component';
import { AccrodionDirective } from './accrodion.directive';
import { AccordionPipe } from './accordion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccrodionDirective,
    AccordionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccrodionData],
  bootstrap: [AppComponent]
})
export class AppModule { }
