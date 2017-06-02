package com.medical.journal.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;

public interface JournalService {
	Journal getJournalById(String journalId);
	List<Journal> getAllContent();
	Journal createContent(MultipartFile file, String name, String description, String publisher);
	Resource getFile(String fileName) throws Exception;
	
}
