import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
    // @Input() hasHeader?: boolean = true;
    // @Input() hasBody?: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
