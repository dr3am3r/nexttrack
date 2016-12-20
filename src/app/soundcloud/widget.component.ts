import { Component, Input, AfterViewInit } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';
import '../../3rd-party/sc.api.js';
import './soundcloud.css';

@Component({
    selector: 'soundcloud-widget',
    template: `
        <div class="widget-container">
            <iframe id="sc-widget" width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/4087864&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
        </div>
    `
})
export class SoundcloudComponent implements AfterViewInit {
    @Input() trackpath: string;
    private _widget: any;
    private _isReady = false;

    constructor() {
        //new SC.Widget('sc-widget');
    }

    ngOnInit() {
        console.log('@ngOnInit widgetComponent');
    }

    ngOnChanges(changeRecords: any) {
        console.log('@ngOnChanges', changeRecords);
        if (this._isReady) {
            this.trackpath && this._widget.load(this.trackpath)
        }
    }
    ngAfterViewInit() {
        console.log('@ngAfterViewInit widgetComponent');
        this._widget = new SC.Widget('sc-widget');
        this._widget.bind(SC.Widget.Events.READY, () => {
            this._isReady = true;
            this.trackpath && this._widget.load(this.trackpath)
        })
    }
}