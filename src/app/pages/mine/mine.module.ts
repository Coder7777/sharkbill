import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineRoutingModule } from './mine-routing.module';
import { MineComponent } from './index/mine.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    declarations: [
        MineComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        MineRoutingModule
    ]
})
export class MineModule { }
