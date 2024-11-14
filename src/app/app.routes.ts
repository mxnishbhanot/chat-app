import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadComponent: () => import('./components/chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: 'events',
        loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent)
      },
      {
        path: 'announcements',
        loadComponent: () => import('./components/announcements/announcements.component').then(m => m.AnnouncementsComponent)
      },
      {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chat',
    pathMatch: 'full'
  }
];
