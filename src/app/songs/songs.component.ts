import { Component, OnInit } from '@angular/core';

import { Song } from './song';
import { User } from './user';
import { SongService } from './song.service.ts';

@Component({
    selector: 'songs',
    templateUrl: './songs.component.html',
    styleUrls: [ './songs.css' ]
})
export class SongsComponent implements OnInit {
    songs: Song[];
    selectedSong: Song;
    user: string = 'id123121212122846';

    constructor(
        private songService: SongService) { }

    getSongs(): void {
        this.songService.getSongs().then(songs => this.songs = songs);
    }

    ngOnInit(): void {
        this.getSongs();
    }

    onVote(song: Song): void {
        // TODO: shitty code just for quick check
        // check if we need to change values for the prev selected song
        if (this.selectedSong && this.selectedSong.id !== song.id) {
            // remove this user from the prev selected song votes
            this.selectedSong.votes.splice(this.selectedSong.votes.indexOf(this.user), 1);
        }

        // change song selected
        this.selectedSong = song;

        //add user to votes array;
        if (song.votes.indexOf(this.user) === -1) {
            song.votes.push(this.user);
        }
    }
}