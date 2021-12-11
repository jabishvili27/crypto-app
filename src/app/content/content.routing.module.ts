import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';

export const routes: Route[] = [
  {
    path: '',
    component: ContentComponent,
  },

  // {
  //   path: ':id',
  //   component: MovieDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
