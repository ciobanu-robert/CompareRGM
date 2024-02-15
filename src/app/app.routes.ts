import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'Login',
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        title: 'Register',
    }
];
