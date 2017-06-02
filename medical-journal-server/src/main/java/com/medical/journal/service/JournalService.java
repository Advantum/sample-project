package com.medical.journal.service;

import com.medical.journal.model.Journal;

import java.util.List;

public interface JournalService {
    List<Journal> getJournals();

    Journal getJournal(int id);

    void createJournal(Journal journal);

}
