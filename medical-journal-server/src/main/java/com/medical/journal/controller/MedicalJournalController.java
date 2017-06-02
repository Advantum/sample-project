package com.medical.journal.controller;

import com.medical.journal.model.User;
import com.medical.journal.model.Journal;
import com.medical.journal.service.JournalService;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.tomcat.jni.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
public class MedicalJournalController {
	
	private final JournalService journalService;
	
	
	@Autowired
	public MedicalJournalController(JournalService journalService) {
		this.journalService = journalService;
	}
	
	
	/**
	 * TODO: Add Validation to ensure files are valid.
	 * @param file
	 * @param name
	 * @param description
	 * @param redirectAttr
	 * @return
	 */
	@RequestMapping(value="/api/upload",
			method=RequestMethod.POST)
	public Journal handleFileUpload(@RequestParam("file") MultipartFile file, @RequestBody String name, @RequestBody String description,
						@RequestBody String userId) {
		
		return journalService.storeRecord(file, name, description, userId );
		
	}
	
	/**
	 * Get all the Journals in the system.
	 * @return List of Journals
	 */
	@RequestMapping(value="/api/content", 
			method=RequestMethod.GET)
	public ResponseEntity<?> getContents() {
		
		return new ResponseEntity<>(journalService.getAllContent(), HttpStatus.OK);
		
	}
	
	@RequestMapping(
	          value = "/journals",
	          method = RequestMethod.GET)
	  public ResponseEntity<?> getAllJournals() {
	      return new ResponseEntity<>(journalService.getAllContent(), HttpStatus.OK);
	  }
	
	
	@RequestMapping(value="/api/content/{contentId}",
			method=RequestMethod.GET)
	public Map<String, Object> getContentById(@PathVariable("contentId") String contentId) {
		Journal journal = journalService.getJournalById(contentId);
		
		Map<String, Object> response = new LinkedHashMap<String, Object>();
		response.put("value", response);
		return response;
	}
	
	@RequestMapping(value="/api/content/file/{fileName}",
			method=RequestMethod.GET)
	public ResponseEntity<?> getFile(@PathVariable("fileName") String fileName ) {
		Resource journalFile = null;
		
		return ResponseEntity
					.ok()
					//.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + journalFile.getFilename() + "\"")
					.body(journalFile); 
	}
}
  
