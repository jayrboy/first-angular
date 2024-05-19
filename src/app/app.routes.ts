import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { FormComponent } from './views/form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Travel details',
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'Form',
  },
];
