package com.medical.journal.service;

import static org.junit.Assert.*;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.when;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.web.multipart.MultipartFile;

import com.medical.journal.model.Journal;
import com.medical.journal.model.User;

public class JournalServiceTest {

	private JournalService journalService;
	private JournalRepository journalRepositoryMock;
	private UserRepository userRepositoryMock;
	private User usr;
	private Journal journalObj;
	
	
	private MultipartFile multiePartMock;
	private Path pathMock;
	
	
	@Before
	public void setUp() throws Exception {
		journalRepositoryMock = Mockito.mock(JournalRepository.class);
		userRepositoryMock = Mockito.mock(UserRepository.class);
		multiePartMock = Mockito.mock(MultipartFile.class);
		pathMock = Mockito.mock(Path.class);
		
		journalService = new JournalServiceImpl(journalRepositoryMock,userRepositoryMock);
		String[] subscription =  {"1","3","new name"};
		usr = new User("myemail", "mypassword", "myfname", "mylname", "role", subscription);
		journalObj = new Journal("jname", "kdescription", "/thefile", usr);
		
		

	}

	@After
	public void tearDown() throws Exception {
		journalService = null;
		journalRepositoryMock = null;
		userRepositoryMock = null;
		journalObj = null;
		pathMock = null;
	}

	@Test
	public void testGetJournalById() {
		String journalId = "142302";
		
		when(journalRepositoryMock.findOne(eq(journalId))).thenReturn(journalObj);
		
		Journal resp = journalService.getJournalById(journalId);
		assertEquals(resp.getName(), journalObj.getName());
		assertEquals(resp.getDescription(), journalObj.getDescription());
		assertEquals(resp.getFile(), journalObj.getFile());
		
	}
	
	@Test
	public void testGetAllJournal() {
		List<Journal> jrnallist = new ArrayList<>();
		jrnallist.add(journalObj);
		
		when(journalRepositoryMock.findAll()).thenReturn(jrnallist);
		
		List<Journal> resp = journalService.getAllJournal();
		assertEquals(resp.size(), 1);
		assertEquals(resp.get(0).getId(), journalObj.getId());
		assertEquals(resp.get(0).getName(), journalObj.getName());
		assertEquals(resp.get(0).getDescription(), journalObj.getDescription());
		
	}	

}
