import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LinearComponent } from './linear/linear.component'
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: 'linear',
        component: LinearComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
