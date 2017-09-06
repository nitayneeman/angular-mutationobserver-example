import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HelloComponent } from './hello.component';
import { DomChangeDirective } from './dom-change.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DomChangeDirective ],
  providers: [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
