import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[voting]'
})
export class VotingDirective {

    userId: string = 'userId2';

    constructor(private el: ElementRef) { }

    @Output() vote = new EventEmitter();

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    @HostListener('click') onClick() {
        this.highlight('green');
        this.vote.emit(this.userId);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}