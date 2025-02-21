import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'famous-buildings',
    pathMatch: 'full',
  },
  {
    path: 'famous-buildings',
    loadComponent: () => import('./wiki-pois/wiki-pois.page').then(m => m.WikiPoisPage)
  },
  {
    path: 'folder/favorites',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
