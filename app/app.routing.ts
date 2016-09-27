import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } fromm './heroes.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent  
  }
];