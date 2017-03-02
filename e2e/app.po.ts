export class RoutingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('routing-app h1')).getText();
  }
}
