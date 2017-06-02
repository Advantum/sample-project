/**
 * 
 */
package com.medical.journal.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	public static String UPLOAD_PATH = "C://Users/Gavin/Desktop/";
	
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
	public Journal createContent(MultipartFile file, String name, String description, String publisher) {
		try{
		String fileName = file.getOriginalFilename();
		String directory = UPLOAD_PATH;
		String filepath = Paths.get(directory, fileName).toString();
		
		BufferedOutputStream bs = new BufferedOutputStream(new FileOutputStream(new File(filepath)));
		bs.write(file.getBytes());
		
		Journal journal = new Journal(name, name, description, filepath, publisher);
		
		return journalRepository.save(journal);
		
		} catch(Exception ex) {
			System.err.print(ex.getMessage());
			return null;
		}
	}
	
	@Override
	public Resource getFile(String journalId) throws Exception {
		try {
			
			Journal journal = journalRepository.findById(journalId);
			String fileName = journal.getFile();
			
			Path filePath = Paths.get(UPLOAD_PATH + fileName);
			Resource resource = new UrlResource(filePath.toUri());
			
			if(resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new Exception("File not found or unable to read file");
			}
		} catch (MalformedURLException exception) {
			throw new Exception("Unable to read the file: " + exception.getMessage());
		}
	}
}
