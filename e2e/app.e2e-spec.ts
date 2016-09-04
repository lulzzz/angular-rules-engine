import { AngularRulesEnginePage } from './app.po';

describe('angular-rules-engine App', function() {
  let page: AngularRulesEnginePage;

  beforeEach(() => {
    page = new AngularRulesEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
