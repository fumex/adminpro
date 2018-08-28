import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PogressComponent } from './pogress/pogress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const pagesRoutes: Routes=[
    { 
        path: '',
        component:PagesComponent, 
        children:[
            { path: 'dashboard',component:DashboardComponent },
            { path: 'progress',component:PogressComponent },
            { path: 'graficas1',component:Graficas1Component},
            { path: 'account-settings' ,component:AccoutSettingsComponent},
            { path:'', redirectTo:'/dashboard', pathMatch:'full' }
        ]
    },
];

export const PAGE_ROUTES = RouterModule.forChild(  pagesRoutes);