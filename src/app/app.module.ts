import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { VotingComponent } from './songs/voting.component';
import { SongsComponent } from './songs/songs.component';
import { SoundcloudComponent } from './soundcloud/widget.component';
import { SongService } from './songs/song.service';

const myFirebaseConfig = {
  apiKey: process.env['firebase.apiKey'],
  authDomain: process.env['firebase.authDomain'],
  databaseURL: process.env['firebase.databaseURL'],
  storageBucket: process.env['firebase.storageBucket']
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
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
