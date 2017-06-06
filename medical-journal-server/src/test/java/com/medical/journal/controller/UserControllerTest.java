package com.medical.journal.controller;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.medical.journal.service.UserServiceImpl;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {
	
	//private List<User> userList;
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	UserServiceImpl userServiceMock;
	
	@Before
	public void setUp() throws Exception {
		
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testUserController() {
		
	}

	@Test
	public void testGetAllUsers() {
	}

	@Test
	public void testUpdateUser() {
		
	}

	@Test
	public void testCreateUser() {
	}

	@Test
	public void testGetUserByEmail() {
	}

	@Test
	public void testAuthenticateUser() {
	}

}
