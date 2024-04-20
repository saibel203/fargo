import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PricesComponent } from './pages/prices/prices.component';

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
    path: 'prices',
    component: PricesComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];
