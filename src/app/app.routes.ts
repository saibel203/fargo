import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];
