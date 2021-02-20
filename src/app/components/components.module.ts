import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { NavTabsItemComponent } from './nav-tabs-item/nav-tabs-item.component';



@NgModule({
    declarations: [
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        NavTabsComponent,
        NavTabsItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        NavTabsComponent,
        NavTabsItemComponent
    ],
})
export class ComponentsModule { }
