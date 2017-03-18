import { HttpAngularPage } from './app.po';

describe('http-angular App', function() {
  let page: HttpAngularPage;

  beforeEach(() => {
    page = new HttpAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
