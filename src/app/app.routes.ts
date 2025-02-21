import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'famous-buildings',
    pathMatch: 'full',
  },
  {
    path: 'famous-buildings',
    loadComponent: () => import('./buildings/buildings.page').then(m => m.BuildingsPage)
  },
  {
    path: 'folder/favorites',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
