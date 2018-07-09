import { HomeComponent } from './workspace/home/home.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
        ]
    },

    // Handle all other routes
    { path: '**', redirectTo:'home' }
];
