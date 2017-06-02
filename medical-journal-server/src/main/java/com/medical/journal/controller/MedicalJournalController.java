package com.medical.journal.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.medical.journal.model.Journal;
import com.medical.journal.service.JournalRepository;
import com.medical.journal.service.JournalService;
import com.medical.journal.service.JournalServiceImpl;

@org.springframework.web.bind.annotation.RestController


@Controller
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
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + journalFile.getFilename() + "\"")
					.body(journalFile); 
	}
	

}
