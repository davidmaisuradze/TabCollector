import { TabCollectorClientPage } from './app.po';

describe('tab-collector-client App', () => {
  let page: TabCollectorClientPage;

  beforeEach(() => {
    page = new TabCollectorClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
