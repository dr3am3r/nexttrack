import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
    selector: 'songs',
    templateUrl: './songs.component.html',
    styleUrls: [ './songs.css' ]
})
export class SongsComponent implements OnInit {

    songs: FirebaseListObservable<any>;
    //selectedSong: any;

    constructor(af: AngularFire) {
        this.songs = af.database.list('/tracks');
    }

    ngOnInit(): void {

    }

    upvote(key: string, cnt?: any) {
        let votesNum = (cnt || 0) + 1;
        this.songs.update(key, { votes: votesNum });
    }


    //onVote(song: any): void {
    //    console.log(song.$key);
    //    // TODO: shitty code just for quick check
    //    // check if we need to change values for the prev selected song
    //    if (this.selectedSong && this.selectedSong.$key !== song.$key) {
    //        // remove this user from the prev selected song votes
    //        this.selectedSong.votes.splice(this.selectedSong.votes.indexOf(this.user), 1);
    //    }
    //
    //    // change song selected
    //    this.selectedSong = songs[$key];
    //
    //    //add user to votes array;
    //    if (song.votes.indexOf(this.user) === -1) {
    //        song.votes.push(this.user);
    //    }
    //}
}