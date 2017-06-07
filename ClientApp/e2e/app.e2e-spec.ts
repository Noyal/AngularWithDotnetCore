import { ClientAppPage } from './app.po';

describe('client-app App', () => {
  let page: ClientAppPage;

  beforeEach(() => {
    page = new ClientAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
