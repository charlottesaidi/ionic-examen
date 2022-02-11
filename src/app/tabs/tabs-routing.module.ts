import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'arts',
        loadChildren: () => import('../pages/arts/arts.module').then( m => m.ArtsPageModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('../pages/detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('../pages/new/new.module').then( m => m.NewPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../pages/favorite/favorite.module').then( m => m.FavoritePageModule)
      },
      {
        path: 'not-found',
        loadChildren: () => import('../pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
