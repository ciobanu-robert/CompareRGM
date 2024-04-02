import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsSettingsPageComponent } from './pages/products-settings-page/products-settings-page.component';
import { ThermsPageComponent } from './pages/therms-page/therms-page.component';
import { CompetitorsPageComponent } from './pages/competitors-page/competitors-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { CompareProductsPageComponent } from './pages/compare-products-page/compare-products-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
        title: 'Home',
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent,
        title: 'Login',
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterPageComponent,
        title: 'Register',
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardPageComponent,
        title: 'Dashboard',
    },
    {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent,
        title: 'Settings',
    },
    {
        path: 'settings/products',
        pathMatch: 'full',
        component: ProductsSettingsPageComponent,
        title: 'Products',
    },
    {
        path: 'therms',
        pathMatch: 'full',
        component: ThermsPageComponent,
        title: 'Therms',
    },
    {
        path: 'competitors',
        pathMatch: 'full',
        component: CompetitorsPageComponent,
        title: 'Competitors',
    },
    {
        path: 'compare',
        pathMatch: 'full',
        component: ComparePageComponent,
        title: 'Compare',
    },
    {
        path: 'compare/products',
        pathMatch: 'full',
        component: CompareProductsPageComponent,
        title: 'Compare',
    },
    {
        path: 'statistics',
        pathMatch: 'full',
        component: StatisticsPageComponent,
        title: 'Statistics',
    },
];
