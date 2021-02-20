import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card-body',
    templateUrl: './card-body.component.html',
    styleUrls: ['./card-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBodyComponent implements OnInit {
    @Input() cardBodyTpl?: TemplateRef<HTMLElement>;
    @Input() hasTitle?: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
