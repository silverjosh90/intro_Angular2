import { ApolloViewerPage } from './app.po';

describe('apollo-viewer App', () => {
  let page: ApolloViewerPage;

  beforeEach(() => {
    page = new ApolloViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
