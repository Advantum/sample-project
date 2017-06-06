package com.medical.journal.service;

import static org.junit.Assert.*;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.medical.journal.model.User;

public class UserServiceTest {
	
	private UserService userService;
	private UserRepository userRepositoryMock;
	private User ausr;
	
	@Before
	public void setUp() throws Exception {
		userRepositoryMock = Mockito.mock(UserRepository.class);
		userService =  new UserServiceImpl(userRepositoryMock);
		String[] subs = {"3", "4"};
		ausr = new User("myemail", "thispass", "This firstname", "this lname", "my role", subs);
	}

	@After
	public void tearDown() throws Exception {
		userService = null;
		userRepositoryMock = null;
	}

	@Test
	public void testGetUsers() {
		List<User> usrs = new ArrayList<>();
		usrs.add(ausr);
		when(userRepositoryMock.findAll()).thenReturn(usrs);
		
		List<User> response = userService.getUsers();
		
		assertEquals(response.size(),1);
		assertEquals(response.get(0).getEmail(), ausr.getEmail());
		assertEquals(response.get(0).getFirstname(), ausr.getFirstname());
		assertEquals(response.get(0).getLastname(), ausr.getLastname());	
		
	}
	
	@Test
	public void testGetUser(){
		when(userRepositoryMock.findById(any(String.class))).thenReturn(ausr);
		
		User response = userService.getUser("123");
		
		assertEquals(response.getEmail(), ausr.getEmail());
		assertEquals(response.getFirstname(), ausr.getFirstname());
		assertEquals(response.getLastname(), ausr.getLastname());	
		
	}
	
	@Test
	public void testCreateUser() {
		when(userRepositoryMock.save(any(User.class))).thenReturn(ausr);
		
		User response = userService.createUser(ausr);
		
		assertEquals(response.getEmail(), ausr.getEmail());
		assertEquals(response.getFirstname(), ausr.getFirstname());
		assertEquals(response.getLastname(), ausr.getLastname());	
	}
	
	@Test
	public void testUnAuthenticatedUser() {
		when(userRepositoryMock.findByEmail(any(String.class))).thenReturn(null);
		
		ResponseEntity<User> response= userService.authenticateUser(ausr);
		
		assertEquals(response.getStatusCode(), HttpStatus.NOT_FOUND);
			
	}
	
	@Test
	public void testAuthenticatedUser() {
		when(userRepositoryMock.findByEmail(any(String.class))).thenReturn(ausr);
		
		ResponseEntity<User> response= userService.authenticateUser(ausr);
		
		assertEquals(response.getStatusCode(), HttpStatus.OK);
			
	}
}
