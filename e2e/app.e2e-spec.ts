import { NgComponent101Page } from './app.po';

describe('ng-component101 App', () => {
  let page: NgComponent101Page;

  beforeEach(() => {
    page = new NgComponent101Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
