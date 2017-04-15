import { ObservablehttpPage } from './app.po';

describe('observablehttp App', () => {
  let page: ObservablehttpPage;

  beforeEach(() => {
    page = new ObservablehttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
