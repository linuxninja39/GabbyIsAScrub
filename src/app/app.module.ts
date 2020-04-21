import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ThingOneComponent } from './components/thing-one/thing-one.component';
import { ThingTwoComponent } from './components/thing-two/thing-two.component';
import { TheOtherThingComponent } from './components/the-other-thing/the-other-thing.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingOneComponent,
    ThingTwoComponent,
    TheOtherThingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
