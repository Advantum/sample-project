package com.medical.journal.service;

import java.util.List;
import java.util.Map;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;

public interface JournalService {

	Boolean storeRecord(MultipartFile file, String name, String description);
	Journal getJournalById(String journalId);
	Map<String, List<Journal>> getAllContent();
	
	
}
