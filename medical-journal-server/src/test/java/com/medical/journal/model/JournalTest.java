/**
 * 
 */
package com.medical.journal.model;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * @author linux-dev
 *
 */
public class JournalTest {
	
	private static User usr;
	private static Journal journal;
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		String[] subs = {"1","2" , "4"};
		usr = new User("myemail", "mainpassword", "The firstname", "The lastname", "my role", subs);
		journal = new Journal("journal name", "the description", "/the path", usr);
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
		usr = null;
		journal = null;
	}

	@Test
	public void testJournal() {
		assertEquals(this.journal.getClass(),Journal.class);
	}
	
	@Test
	public void testDescription() {
		assertEquals(journal.getDescription(), "the description");
	}
	
	@Test
	public void testName() {
		assertEquals(journal.getName(), "journal name");
		
	}
	
	@Test
	public void testFilePath(){
		assertEquals(journal.getFile(), "/the path");
		
	}
	
	@Test
	public void testUser() {
		assertEquals(journal.getUser(), usr);
	}

}
