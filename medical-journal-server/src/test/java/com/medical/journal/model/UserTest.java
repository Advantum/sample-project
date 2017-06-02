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
		assertEquals(this.aUser.getId(), "myemail@gmail.com");
	}

	@Test
	public void testGetEmail() {
		assertEquals(this.aUser.getEmail(), "myemail@gmail.com");
	}

	@Test
	public void testSetEmail() {
		aUser.setEmail("newemail");
		assertEquals(this.aUser.getEmail(), "newemail");
	}

	@Test
	public void testGetPassword() {
		assertEquals(aUser.getPassword(), "mypassword");
	}



	@Test
	public void testGetFirstname() {
		assertEquals(aUser.getFirstname(), "myfirstname");
	}

	@Test
	public void testSetFirstname() {
		aUser.setFirstname("myname");
		assertEquals(aUser.getFirstname(), "myname");
	}

	@Test
	public void testGetLastname() {
		assertEquals(aUser.getLastname(), "mylastname");
	}

	@Test
	public void testSetLastname() {
		aUser.setLastname("newlastname");
		assertEquals(aUser.getLastname(), "newlastname");
	}

	@Test
	public void testGetRole() {
		assertEquals(aUser.getRole(), "newRole");
	}

	@Test
	public void testSetRole() {
		aUser.setRole("theOldRole");
		assertEquals(aUser.getRole(), "theOldRole");
	}

}
