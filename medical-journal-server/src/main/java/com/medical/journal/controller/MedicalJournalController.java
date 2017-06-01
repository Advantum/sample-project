package com.medical.journal.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.medical.journal.model.Journal;
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
	
	@RequestMapping(value="/api/upload",
			method=RequestMethod.POST)
	public String handleFileUpload(@RequestParam("file") MultipartFile file,
						RedirectAttributes redirectAttr) {
		
		journalService.storeFile(file);
		
		return "File upload complete";
	}
	
	@RequestMapping(value="/api/content", 
			method=RequestMethod.GET, 
			consumes="application/json", 
			produces="application/json")
	public @ResponseBody List<Journal> getContents() {
		
		return journalService.getAllJournals();
		
	}
	
	
	@RequestMapping(value="/api/content/{contentId}",
			method=RequestMethod.GET)
	public Map<String, Object> getContentById(@PathVariable("contentId") String contentId) {
		Resource journalObj = null;
		
		//return ResponseEntity.ok().body(journalObj);
		Map<String, Object> response = new LinkedHashMap<String, Object>();
		response.put("value", "Response" + contentId);
		return response;
	}
	
	@RequestMapping(value="/api/content/file/{fileName}",
			method=RequestMethod.GET)
	public ResponseEntity<Resource> getFile(@PathVariable("fileName") String fileName ) {
		Resource journalFile = null;
		
		return ResponseEntity
					.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + journalFile.getFilename() + "\"")
					.body(journalFile); 
	}
	

}
