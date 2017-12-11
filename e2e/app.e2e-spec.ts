import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Angular HTTP Auth"', () => {
    expect(page.getTitleText()).toContain('Angular HTTP Auth');
  });
});
