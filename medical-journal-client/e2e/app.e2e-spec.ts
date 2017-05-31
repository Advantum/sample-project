import { MedicalJournalClientPage } from './app.po';

describe('medical-journal-client App', () => {
  let page: MedicalJournalClientPage;

  beforeEach(() => {
    page = new MedicalJournalClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
