import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeconadryComponent } from './seconadry/seconadry.component';
import { ContentTestComponent } from './content-test/content-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SeconadryComponent,
    ContentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
