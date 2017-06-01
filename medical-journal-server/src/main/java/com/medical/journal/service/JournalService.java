package com.medical.journal.service;

import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;

public interface JournalService {

	String storeFile(MultipartFile file);
	Journal getJournalById(String journalId);
	List<Journal> getAllJournals();
	
	
}
