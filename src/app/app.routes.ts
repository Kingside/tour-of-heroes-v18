import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'detail/:id',
      component: HeroDetailComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
];
