/**
 * 
 */
package com.medical.journal.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;
import com.medical.journal.model.User;

/**
 * @author linux-dev
 *
 */
@Service
public class JournalServiceImpl implements JournalService{
	
	public static String UPLOAD_PATH = "uploaded-journal/";
	
	@Autowired
	private JournalRepository journalRepository;
	

	@Override
	public Journal getJournalById(String journalId) {
		Journal journal = journalRepository.findOne(journalId);
		
		return journal;
	}

	@Override
	public List<Journal> getAllContent() {
		List<Journal> journals = (List<Journal>) journalRepository.findAll();
		
		return journals;
	}
	
	@Override 
	public Journal createContent(MultipartFile file, Journal journal) {
		journal.setFile(file);
		
		return journalRepository.save(journal);
	}
	
	@Override
	public Resource getFile(String fileName) throws Exception {
		try {
			Path filePath = Paths.get(UPLOAD_PATH + fileName);
			Resource resource = new UrlResource(filePath.toUri());
			if(resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new Exception("File not found or unable to read file");
			}
		} catch (MalformedURLException exception) {
			throw new Exception("Unable to read the file: " + fileName);
		}
	}
}
