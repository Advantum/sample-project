/**
 * 
 */
package com.medical.journal.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

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

	@Override
	public String storeFile(MultipartFile file) {
		// TODO Auto-generated method stub
		try{
			byte[] bytes = file.getBytes();
			Path filePath = Paths.get(UPLOAD_PATH + file.getOriginalFilename());
			Files.write(filePath, bytes);
			
			return file.getOriginalFilename();
		} catch(IOException ioEx) {
			ioEx.printStackTrace();
		}
	}

	@Override
	public Journal getJournalById(String journalId) {
		// TODO Auto-generated method stub
		Journal journal = null;
		return journal;
	}

	@Override
	public List<Journal> getAllJournals() {
		List<Journal> journalList = new ArrayList<Journal>();
		Journal j = new Journal( "My nbame", "Description" , "/url to file is here");
		journalList.add(j);
		
		return journalList;
	}

}
