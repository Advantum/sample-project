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
	
	public static String UPLOAD_PATH = "folder";
	
	@Autowired
	private JournalRepository journalRepository;
	
	
	@Override
	public void init() {
		try {
			Path dirPath = Paths.get(UPLOAD_PATH);
			Files.createDirectory(dirPath);
		} catch (IOException ex) {
			System.out.println("Unable to create folder");
		}
	}
	
	@Override
	public Journal storeRecord(MultipartFile file/*, String name, String description, String strUserId*/) {
		// TODO Auto-generated method stub
		try{
			init();
			
			byte[] bytes = file.getBytes();
			String fileUrl = file.getOriginalFilename();
			Path filePath = Paths.get(UPLOAD_PATH + fileUrl);
			Files.write(filePath, bytes);
			
			//TODO Include Logic to connect user
			//int userId = Integer.valueOf(strUserId);
			
			//Journal newJournal = new Journal(name, description, fileUrl, userId);
			//return journalRepository.save(newJournal);
			
		} catch(IOException ioEx) {
			ioEx.printStackTrace();
		}
		return null;
		
	}

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
	public Journal createContent(Journal journal) {
		System.out.print("Journal object: " + journal.toString());
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
