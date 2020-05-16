import { Routes , RouterModule} from "@angular/router"

import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component'
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component'

const ROUTES : Routes = [

  // {path: 'init', component: InitComponent},
  //{path: 'home', component: HomeComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: 'search', component: SearchComponent},


  {path: 'all', component: AllComponent},

  {path: 'explore', component: ExploreComponent},
  {path: 'explore/region/:region', component: RegionComponent},
  {path: 'explore/only/:only', component: CountryComponent},

  {path: 'about', component: AboutComponent},
  {path: '', component: InitComponent},
  {path: '**', component: InitComponent}

]

export const ROUTING = RouterModule.forRoot(ROUTES);
