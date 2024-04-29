// Importing packages
import { lazy } from 'react';

// Importing routes
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export default [
  {
    name: 'RegisterPage',
    path: '/register',
    component: <RegisterPage />
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: <LoginPage />
  }
];
