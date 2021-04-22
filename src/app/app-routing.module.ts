import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './shared/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'auth/login',
  //   component: LoginComponent,
  // },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**', // Navigate to Login Page if not found any page
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
