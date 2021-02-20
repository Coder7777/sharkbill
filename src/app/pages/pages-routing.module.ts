import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../layout/content/content.component';

const routes: Routes = [
    {
        path: "",
        component: ContentComponent,
        children: [
            { path: "mine", loadChildren: () => import('./mine/mine.module').then(m => m.MineModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
