import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RoutingAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(RoutingAppComponent);
