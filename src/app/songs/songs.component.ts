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
    user: User;

    constructor(
        private songService: SongService) { }

    getSongs(): void {
        this.songService.getSongs().then(songs => this.songs = songs);
    }

    ngOnInit(): void {
        this.getSongs();
    }

    onVote(user: User, song: Song): void {
        // check if we need to change values for the prev selected song
        if (this.selectedSong && this.selectedSong.id !== song.id) {
            // remove this user from the prev selected song votes
            this.selectedSong.votings.splice(this.selectedSong.votings.indexOf(user), 1);
        }
        // change song selected
        this.selectedSong = song;
        // push user id to the song votings array
        song.votings.push(user);
    }
}