import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenlistComponent } from './component/screenlist/screenlist.component';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenlistComponent,
    MainscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
