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

	public static String UPLOAD_PATH = "C://Users/Jason/Desktop/";

	@Autowired
	private JournalRepository journalRepository;

	@Autowired
	private UserRepository userRepository;
	
	public JournalServiceImpl(JournalRepository journalRepo, UserRepository userRepo) {
		journalRepository = journalRepo;
		userRepository = userRepo;
	}


	/**
	 * Get the journal based on the journal Id
	 */
	@Override
	public Journal getJournalById(String journalId) {
		Journal journal = journalRepository.findOne(journalId);

		return journal;
	}

	@Override
	public List<Journal> getAllJournal() {
		List<Journal> journals = (List<Journal>) journalRepository.findAll();

		return journals;
	}

	/**
	 * Create the content and move the file to the respective location.
	 */
	@Override
	public Journal createJournal(MultipartFile file, String name, String description, String userId) {
		try{
		String fileName = file.getOriginalFilename();
		String directory = UPLOAD_PATH;
		String filepath = Paths.get(directory, fileName).toString();

		BufferedOutputStream bs = new BufferedOutputStream(new FileOutputStream(new File(filepath)));
		bs.write(file.getBytes());


		User publisher = userRepository.findById(userId);
		Journal journal = new Journal(name, description, filepath,  publisher);

		return journalRepository.save(journal);

		} catch(Exception ex) {
			System.err.print(ex.getMessage());
			return null;
		}
	}

	/**
	 * Extract the file and return it to the calling function
	 */
	@Override
	public /*Resource*/ Journal getFile(String journalId) throws Exception {
//		try {

			Journal journal = journalRepository.findById(journalId);
			return journal;
//			String fileName = journal.getFile();
//
//			Path filePath = Paths.get(fileName);
//			Resource resource = new UrlResource(filePath.toUri());
//
//			if(resource.exists() || resource.isReadable()) {
//				return resource;
//			} else {
//				throw new Exception("File not found or unable to read file");
//			}
//		} catch (MalformedURLException exception) {
//			throw new Exception("Unable to read the file: " + exception.getMessage());
//		}
	}
}
