import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MineComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
