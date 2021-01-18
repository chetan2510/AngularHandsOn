import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {UsersComponent} from './users/users.component';


// First, the app-routing.module.ts file imports RouterModule and Routes
// so the app can have routing functionality. The next import, HeroesComponent,
// will give the Router somewhere to go once you configure the routes.
// Notice that the CommonModule references and declarations array are unnecessary,
// so are no longer part of AppRoutingModule. The following sections explain the rest of the
// AppRoutingModule in more detail.

// This tell which component to display when a user clicks or pastes a url in the browser bar
const routes: Routes = [

  //This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when
  // the URL is something like localhost:4200/heroes.
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
