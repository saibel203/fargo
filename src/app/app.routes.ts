import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PricesComponent } from './pages/prices/prices.component';
import { MastersComponent } from './pages/masters/masters.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';

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
    path: 'masters',
    component: MastersComponent,
  },
  {
    path: 'discounts',
    component: DiscountsComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];
