import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: '../films/films.module#FilmsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../film-details/film-details.module#FilmDetailsPageModule'
          }
        ]
      },
      {
        path: 'peoples',
        children: [
          {
            path: '',
            loadChildren: '../peoples/peoples.module#PeoplesPageModule'
          },
          {
            path: ':id',
            loadChildren: '../people-details/people-details.module#PeopleDetailsPageModule'
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../planets/planets.module#PlanetsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../planet-details/planet-details.module#PlanetDetailsPageModule'

          }
        ]
      },
      {
        path: 'starships',
        children: [
          {
            path: '',
            loadChildren: '../starships/starships.module#StarshipsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../starship-details/starship-details.module#StarshipDetailsPageModule'

          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}