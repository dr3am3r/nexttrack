import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'voting',
    template: `
    my vote: {{userVote}} <br>
    <button (click)="upVote()">Upvote +</button>
    `
})

export class VotingComponent {

    @Input() userVote = 0;

    @Output('vote') change = new EventEmitter();

    upVote() {
        if (this.userVote == 1) {
            return;
        }

        this.userVote++;
        this.emitEvent();
    }

    emitEvent() {
        this.change.emit({userVote: this.userVote});
    }
}
