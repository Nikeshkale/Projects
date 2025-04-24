import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { AboutComponent } from './components/about/about.component';
import { authguardGuard } from './auth/authguard.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';

export const routes: Routes = [
    // {path:'',component:NavbarComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SingUpComponent },
    { path: 'create', component: CreateBinComponent, canActivate:[authguardGuard] },
    // lazy loading concept 
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent) },
    
    { path: '', loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent) },
    {path: 'snippet/:id', component:ViewSnippetComponent},
    // {path:'', redirectTo:"/home", pathMatch:"full"},
    { path: '**', component: PageNotFoundComponent },
    
];
