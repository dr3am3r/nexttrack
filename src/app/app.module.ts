import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: process.env['firebase.apiKey'],
      authDomain: process.env['firebase.authDomain'],
      databaseURL: process.env['firebase.databaseURL'],
      storageBucket: process.env['firebase.storageBucket']
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
