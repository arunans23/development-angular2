import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DirectivesAppComponent } from '../app/directives.component';

beforeEachProviders(() => [DirectivesAppComponent]);

describe('App: Directives', () => {
  it('should create the app',
      inject([DirectivesAppComponent], (app: DirectivesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'directives works!\'',
      inject([DirectivesAppComponent], (app: DirectivesAppComponent) => {
    expect(app.title).toEqual('directives works!');
  }));
});
