/**
 * 
 */
package com.medical.journal.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;

/**
 * @author linux-dev
 *
 */
@Service
public class JournalServiceImpl implements JournalService{
	
	public static String UPLOAD_PATH = "/folder";
	@Autowired
	private JournalRepository journalRepository;

	@Override
	public Boolean storeRecord(MultipartFile file, String name, String description) {
		// TODO Auto-generated method stub
		try{
			byte[] bytes = file.getBytes();
			String fileUrl = file.getOriginalFilename();
			Path filePath = Paths.get(UPLOAD_PATH + fileUrl);
			Files.write(filePath, bytes);
			
			Journal newJournal = new Journal(name, description, fileUrl);
			journalRepository.save(newJournal);
			return true;
		} catch(IOException ioEx) {
			ioEx.printStackTrace();
		}
		return false;
	}

	@Override
	public Journal getJournalById(String journalId) {
		journalRepository.save(new Journal("Name", "Description of journal", "fileUrl"));
		
		Journal journal = journalRepository.findOne(journalId);
		
		return journal;
	}

	@Override
	public Map<String, List<Journal>> getAllContent() {
		List<Journal> journals = (List<Journal>) journalRepository.findAll();
		
		Map<String, List<Journal>> response = new HashMap<String, List<Journal>>();
		response.put("journals", journals);
		return response;
	}

}
