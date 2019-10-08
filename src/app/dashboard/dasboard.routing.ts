import { Routes } from '@angular/router';

import { DetailComponent } from '../pages/detail/detail.component';
import { EntryExitComponent } from '../pages/entry-exit/entry-exit.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';

export const routerDaboard: Routes = [
  // Default route
  { path: '', redirectTo: 'statistics', pathMatch: 'full' },
  { path: 'detail', component: DetailComponent },
  { path: 'entry-exit', component: EntryExitComponent },
  { path: 'statistics', component: StatisticsComponent },
];
