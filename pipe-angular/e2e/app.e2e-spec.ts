import { PipeAngularPage } from './app.po';

describe('pipe-angular App', function() {
  let page: PipeAngularPage;

  beforeEach(() => {
    page = new PipeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
