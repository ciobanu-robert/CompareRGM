import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsSettingsPageComponent } from './pages/products-settings-page/products-settings-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { CompetitorsPageComponent } from './pages/competitors-page/competitors-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { CompareProductsPageComponent } from './pages/compare-products-page/compare-products-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuardLoggedInService } from './services/auth-guard-logged-in.service';
import { AuthGuardLoggedOutService } from './services/auth-guard-logged-out.service';
import { CompareGuardService } from './services/compare-guard.service';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminSettingsComponent } from './pages/admin-settings/admin-settings.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { UserGuardService } from './services/user-guard.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
        title: 'Home',
        canActivate: [AuthGuardLoggedOutService]
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
        canActivate: [AuthGuardLoggedOutService]
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent,
        title: 'Login',
        canActivate: [AuthGuardLoggedOutService]
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterPageComponent,
        title: 'Register',
        canActivate: [AuthGuardLoggedOutService]
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardPageComponent,
        title: 'Dashboard',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent,
        title: 'Settings',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'settings/products',
        pathMatch: 'full',
        component: ProductsSettingsPageComponent,
        title: 'Products',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'terms',
        pathMatch: 'full',
        component: TermsPageComponent,
        title: 'Terms',
    },
    {
        path: 'competitors',
        pathMatch: 'full',
        component: CompetitorsPageComponent,
        title: 'Competitors',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'compare',
        pathMatch: 'full',
        component: ComparePageComponent,
        title: 'Compare',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'compare/products',
        pathMatch: 'full',
        component: CompareProductsPageComponent,
        title: 'Compare',
        canActivate: [CompareGuardService],

    },
    {
        path: 'statistics',
        pathMatch: 'full',
        component: StatisticsPageComponent,
        title: 'Statistics',
        canActivate: [AuthGuardLoggedInService],
    },
    {
        path: 'admin/users',
        pathMatch: 'full',
        component: AdminUsersComponent,
        title: 'Users',
        canActivate: [AuthGuardAdminService],
    },
    {
        path: 'admin/user/:id',
        pathMatch: 'full',
        component: AdminUserComponent,
        title: 'User',
        canActivate: [UserGuardService],
    },
    {
        path: 'admin/settings',
        pathMatch: 'full',
        component: AdminSettingsComponent,
        title: 'Settings',
        canActivate: [AuthGuardAdminService],
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Page not found'
    }
];
