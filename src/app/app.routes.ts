import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    { path: '', component: AppComponent},
    { path: 'layout', component: LayoutComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'forgotPassword', component: ForgotPasswordComponent }, 
    { path: '**', component: NotFoundComponent } //Wildcard route for a 404 page
    
];


