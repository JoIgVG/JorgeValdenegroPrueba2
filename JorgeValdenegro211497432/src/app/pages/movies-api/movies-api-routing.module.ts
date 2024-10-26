import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesApiPage } from './movies-api.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesApiPageRoutingModule {}
