import { Component, OnInit } from '@angular/core';

import { Song } from './song';
import { SongService } from './song.service.ts';

@Component({
    selector: 'songs',
    templateUrl: './songs.component.html',
    styleUrls: [ './songs.css' ]
})
export class SongsComponent implements OnInit {
    songs: Song[];
    selectedSong: Song;

    constructor(
        private songService: SongService) { }

    getSongs(): void {
        this.songService.getSongs().then(songs => this.songs = songs);
    }

    ngOnInit(): void {
        this.getSongs();
    }

    onSelect(song: Song): void {
        this.selectedSong = song;
    }

    onVote(song: Song): void {
        console.log('song', song);
    }
}