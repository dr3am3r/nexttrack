import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { VotingComponent } from './songs/voting.component';
import { SongsComponent } from './songs/songs.component';
import { SoundcloudComponent } from './soundcloud/widget.component';
import { SongService } from './songs/song.service';

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
    VotingComponent,
    SongsComponent,
    SoundcloudComponent
  ],
  providers: [ SongService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
