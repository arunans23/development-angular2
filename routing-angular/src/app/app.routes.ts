import { providesRoutes } from "@angular/router";

import { UserComponent } from './user';
import { HomeComponent } from './home-component.component';


const APP_ROUTES = [
  { path: 'user', component: UserComponent},
  { path: '', component: HomeComponent}
  ];

export const APP_ROUTES_PROVIDER = [
  providesRoutes(APP_ROUTES)
];
