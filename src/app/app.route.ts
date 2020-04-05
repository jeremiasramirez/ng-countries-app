import { Routes , RouterModule} from "@angular/router"

import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component'

const ROUTES : Routes = [

  {path: 'init', component: InitComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: 'all', component: AllComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: InitComponent},
  {path: '**', component: InitComponent}

]

export const ROUTING = RouterModule.forRoot(ROUTES);
