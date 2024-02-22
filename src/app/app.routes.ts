import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageComponent } from './shared/components/page/page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':page',
        component: PageComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
