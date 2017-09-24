import { WebcounselingPage } from './app.po';

describe('webcounseling App', () => {
  let page: WebcounselingPage;

  beforeEach(() => {
    page = new WebcounselingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
