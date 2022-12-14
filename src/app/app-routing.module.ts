import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule)},
  {path: '**', loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppRoutingModule { }
