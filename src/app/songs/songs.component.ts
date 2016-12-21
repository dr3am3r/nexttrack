import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Song } from './song';
import { SongService } from './song.service.ts';

@Component({
    selector: 'songs',
    templateUrl: './songs.component.html',
    styleUrls: [ './songs.css' ],
})
export class SongsComponent implements OnInit {

    items: FirebaseListObservable<any>;

    songs: Song[];
    selectedSong: Song;

    constructor(af: AngularFire,
        private songService: SongService) {

        this.items = af.database.list('/tracks');

    }

    upvote(key: string, cnt?: any) {
        let votesNum = (cnt || 0) + 1;
        this.items.update(key, { votes: votesNum });
    }

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
        console.log('song before', song);
        song.voteCount++;
        console.log('song after', song);
    }
}