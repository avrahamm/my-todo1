import { MyTodo1Page } from './app.po';

describe('my-todo1 App', () => {
  let page: MyTodo1Page;

  beforeEach(() => {
    page = new MyTodo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
