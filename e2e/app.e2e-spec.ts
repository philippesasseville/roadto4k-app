import { Roadto4kAppPage } from './app.po';

describe('roadto4k-app App', function() {
  let page: Roadto4kAppPage;

  beforeEach(() => {
    page = new Roadto4kAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
