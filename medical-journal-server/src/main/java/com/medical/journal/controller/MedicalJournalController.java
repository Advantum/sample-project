package com.medical.journal.controller;

import com.medical.journal.model.User;
import com.medical.journal.model.Journal;
import com.medical.journal.service.JournalService;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.core.io.Resource;

import org.apache.tomcat.jni.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@org.springframework.web.bind.annotation.RestController
@Controller
public class MedicalJournalController {
	
	private final JournalService journalService;
	
	
	@Autowired
	public MedicalJournalController(JournalService journalService) {
		this.journalService = journalService;
	}
	
	
	@RequestMapping(value="/api/content", 
			method=RequestMethod.GET)
	public ResponseEntity<?> getContents() {
		
		return new ResponseEntity<>(journalService.getAllContent(), HttpStatus.OK);		
	}
	
	/**
	 * Get all the Journals in the system.
	 * @return List of Journals
	 */
	@RequestMapping(
	          value = "/api/journals",
	          method = RequestMethod.GET)
	  public ResponseEntity<?> getAllJournals() {
	      return new ResponseEntity<>(journalService.getAllContent(), HttpStatus.OK);
	  }
	
	
	@RequestMapping(
	          value = "/api/journals",
	          method = RequestMethod.POST, consumes={"multipart/form-data"})
	  public ResponseEntity<?> getAllJournals(@RequestParam("file") MultipartFile file, @RequestParam("name") String name, @RequestParam("description") String description) {
	      return new ResponseEntity<>(journalService.createContent(file, name, description, ""), HttpStatus.OK);
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
	@ResponseBody
	public ResponseEntity<Resource> getFile(@PathVariable("fileName") String fileName ) {
		
		try{
			Resource journalFile = journalService.getFile(fileName);
			
			return ResponseEntity
						.ok()
						.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + journalFile.getFilename() + "\"")
						.body(journalFile); 
		} catch (Exception e) {
			System.err.println("Loading file " + fileName + " failed. Reason: " + e.getMessage());
			return null;
			//return new ResponseEntity<Resource>("Failed to source file: " + e.getMessage(), HttpStatus.NOT_FOUND); 
		}
	}
}
  
