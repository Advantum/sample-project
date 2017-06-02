package com.medical.journal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import org.springframework.stereotype.Service;

import com.medical.journal.model.Journal;
import com.medical.journal.model.User;

@Service
public class JournalServiceImpl implements JournalService {

	private List<Journal> allJournals = new ArrayList<>(Arrays.asList(
			new Journal(1,"Zika in the Caribbean", "Zika spreads rapid", "/fileupload/Zika.pdf", 1),
			new Journal(1,"Zika in the Caribbean", "Zika spreads rapid", "/fileupload/Zika.pdf", 2)

			));


    @Override
    public List<Journal> getJournals() {
		return allJournals;
    }

   

    @Override
    public void createJournal(Journal journal) {
    	allJournals.add(journal);
    }



	@Override
	public Journal getJournal(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
