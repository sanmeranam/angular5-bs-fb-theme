import { HomeComponent } from './workspace/home/home.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
        ]
    },    
    { path: '**', component: HomeComponent}
];
