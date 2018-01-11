import { BuilderAppPage } from './app.po';

describe('builder-app App', function() {
  let page: BuilderAppPage;

  beforeEach(() => {
    page = new BuilderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
