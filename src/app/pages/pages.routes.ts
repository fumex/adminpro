import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PogressComponent } from './pogress/pogress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes=[
    { 
        path: '',
        component:PagesComponent,
        canActivate:[ LoginGuardGuard ],
        children:[
            { path: 'dashboard',component:DashboardComponent, data:{ titulo:'Dashboard'} },
            { path: 'progress',component:PogressComponent, data:{ titulo:'Progress'} },
            { path: 'graficas1',component:Graficas1Component,data:{ titulo:'Graficas'}},
            { path: 'promesas',component:PromesasComponent,data:{ titulo:'Promesas'}},
            { path: 'rxjs',component:RxjsComponent,data:{ titulo:'Rxjs'}},
            { path: 'account-settings' ,component:AccoutSettingsComponent,data:{ titulo:'Ajustes del tema'}},
            { path:'', redirectTo:'/dashboard', pathMatch:'full' }
        ]
    },
];

export const PAGE_ROUTES = RouterModule.forChild(  pagesRoutes);