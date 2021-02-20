import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-card-header',
    templateUrl: './card-header.component.html',
    styleUrls: ['./card-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent implements OnInit {
    @Input() cardHeaderIconTpl?: TemplateRef<HTMLElement>;
    @Input() cardHeaderExtraTpl?: TemplateRef<HTMLElement>;
    @Input() cardHeaderTpl?: TemplateRef<HTMLElement>;
    @Input() cardTitle?: string;
    @Input() cardTitleIcon?: string;
    @Input() hasBody?: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
