import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RoutingAppComponent } from '../app/routing.component';

beforeEachProviders(() => [RoutingAppComponent]);

describe('App: Routing', () => {
  it('should create the app',
      inject([RoutingAppComponent], (app: RoutingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'routing works!\'',
      inject([RoutingAppComponent], (app: RoutingAppComponent) => {
    expect(app.title).toEqual('routing works!');
  }));
});
