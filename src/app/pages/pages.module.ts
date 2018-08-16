import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PogressComponent } from './pogress/pogress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGE_ROUTES } from './pages.routes';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        PogressComponent,
        Graficas1Component,
    ],
    exports:[
        DashboardComponent,
        PogressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGE_ROUTES
    ]

})
export class PagesModule{}