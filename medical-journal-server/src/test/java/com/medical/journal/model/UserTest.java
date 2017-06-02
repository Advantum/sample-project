package com.medical.journal.model;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class UserTest {

	public static User aUser;
	@Before
	public void setUp() throws Exception {
		aUser = new User("myemail@gmail.com", "mypassword", "myfirstname", "mylastname", "newRole");
	}

	@After
	public void tearDown() throws Exception {
		aUser = null;
	}

	@Test
	public void testUser() {
		assertEquals(this.aUser.getClass(),User.class);
	}


	@Test
	public void testGetId() {
		assertEquals(this.aUser.getId(), "myemail@gmail.com");
	}

	@Test
	public void testSetId() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetEmail() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetEmail() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetPassword() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetPassword() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetFirstname() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetFirstname() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetLastname() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetLastname() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetRole() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetRole() {
		fail("Not yet implemented");
	}

	@Test
	public void testToString() {
		fail("Not yet implemented");
	}

}
