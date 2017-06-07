import { LastfmPage } from './app.po';

describe('lastfm App', () => {
  let page: LastfmPage;

  beforeEach(() => {
    page = new LastfmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
