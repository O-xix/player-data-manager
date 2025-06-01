import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full' },
    { path: 'about', component: AboutPageComponent },
];
