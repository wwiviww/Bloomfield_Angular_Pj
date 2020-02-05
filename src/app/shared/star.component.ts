import { Component, OnChanges, Input, Output } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 1;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    

    onClick(): void { 
        this.notify.emit(`The rating was ${this.rating}`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }
}