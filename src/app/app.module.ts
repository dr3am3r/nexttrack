import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './songs/song.service';
import { VotingDirective } from './songs/voting.directive';

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
    AppComponent,
    SongsComponent,
    VotingDirective
  ],
  providers: [ SongService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
