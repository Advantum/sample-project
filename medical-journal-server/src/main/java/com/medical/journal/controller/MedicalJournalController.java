package com.medical.journal.controller;

import com.medical.journal.model.User;
import com.medical.journal.model.Journal;
import com.medical.journal.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
public class MedicalJournalController {

  private final JournalService journalService;

  @Autowired
  public MedicalJournalController(JournalService journalService) {
      this.journalService = journalService;
  }

  @RequestMapping(
          value = "/journals",
          method = RequestMethod.GET)
  public ResponseEntity<?> getAllJournals() {
      return new ResponseEntity<>(journalService.getJournals(), HttpStatus.OK);
  }
}
  
