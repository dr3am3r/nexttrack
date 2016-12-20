// TODO: move Firebase here
// TODO: do reset for votings

import { Song } from './song';
import { SONGS } from './mock-songs';
import { Injectable } from '@angular/core';

@Injectable()
export class SongService {
    getSongs(): Promise<Song[]> {
        return Promise.resolve(SONGS);
    }

    getSongsSlowly(): Promise<Song[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getSongs()), 2000);
        });
    }

    getSong(id: number): Promise<Song> {
        return this.getSongs()
            .then(songs => songs.find(song => song.id === id));
    }
}