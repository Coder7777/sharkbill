import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { NavTabsComponent } from '../components/nav-tabs/nav-tabs.component';



@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        ContentComponent,
        NavTabsComponent
    ]
})
export class LayoutModule { }
