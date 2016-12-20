import { Component, Input } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';
import '../../3rd-party/sc.api.js';
import './soundcloud.css';

@Component({
    selector: 'soundcloud-widget',
    template: `
        <div class="widget-container">
            <iframe class="iframe" id="sc-widget" width="100%" height="465" scrolling="no" frameborder="no"></iframe>
        </div>
    `
})
export class SoundcloudComponent {
    @Input() trackpath: string;
    private _widget: any;
    private _isReady = false;

    ngOnInit() {
        this._widget = SC.Widget('sc-widget');
        this._widget.bind(SC.Widget.Events.READY, () => {
            this._isReady = true;
            this.trackpath && this._widget.load(this.trackpath)
        })
    }

    ngOnChanges(changeRecords: any) {
        console.log('@ngOnChanges', changeRecords)
        if (this._isReady) {
            this.trackpath && this._widget.load(this.trackpath)
        }
    }
}