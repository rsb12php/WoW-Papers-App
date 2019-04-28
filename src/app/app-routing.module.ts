import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'pop',
    loadChildren: './pop/pop.module#PopPageModule'
  },
  {
    path: 'cloud',
    loadChildren: './cloud/cloud.module#CloudPageModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserPageModule'
  },
  { 
    path: 'la-casa-de-papel',
    loadChildren: './la-casa-de-papel/la-casa-de-papel.module#LaCasaDePapelPageModule' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
