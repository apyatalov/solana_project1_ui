import { Routes } from '@angular/router';
import {About} from "./pages/about/about";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        component: About  // Direct import
    },
    {
        path: '**',
        redirectTo: '/home'  // Wildcard route for 404
    }
];
