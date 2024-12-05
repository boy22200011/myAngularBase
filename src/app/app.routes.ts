import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  { path: '**', redirectTo: 'login' },
];
