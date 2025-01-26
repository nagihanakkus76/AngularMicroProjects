import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-page/login/login.component';
import { CreateUserComponent } from './components/register-page/create-user/create-user.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  }
];
