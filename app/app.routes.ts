import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { NextFormComponent } from './next-form/next-form.component';

export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'next-form', component: NextFormComponent },
];
