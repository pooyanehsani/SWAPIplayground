import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'peoples', loadChildren: './pages/peoples/peoples.module#PeoplesPageModule' },
  { path: 'planet-details', loadChildren: './pages/planet-details/planet-details.module#PlanetDetailsPageModule' },
  { path: 'starship-details', loadChildren: './pages/starship-details/starship-details.module#StarshipDetailsPageModule' },
  { path: 'starships', loadChildren: './pages/starships/starships.module#StarshipsPageModule' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }