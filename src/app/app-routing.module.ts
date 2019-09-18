import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'ionbutton',
    loadChildren: () => import('./ionButton/ionButton.module').then(m => m.IonButtonPageModule)
  },
  {
    path: 'ionActionSheet',
    loadChildren: () => import('./ionActionSheet/ionActionSheet.module').then(m => m.IonActionSheetPageModule)
  },
  {
    path: 'ionAlert',
    loadChildren: () => import('./ionAlert/ionAlert.module').then(m => m.IonAlertPageModule)
  },
  { path: 'ion-card', loadChildren: './ion-card/ion-card.module#IonCardPageModule' },
  { path: 'ion-badge', loadChildren: './ion-badge/ion-badge.module#IonBadgePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
