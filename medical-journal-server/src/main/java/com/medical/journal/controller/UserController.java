package com.medical.journal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.medical.journal.model.User;
import com.medical.journal.service.UserRepository;
import com.medical.journal.service.UserService;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
@Controller
public class UserController {
	
	private final UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(
			value="/users",
			method=RequestMethod.GET)
	public ResponseEntity<?> getAllUsers() {
		return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
	}
	
	
	@RequestMapping(
			value="/users",
			method=RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
	}
	
	@RequestMapping(
			value="/registration",
			method=RequestMethod.POST)
	public User createUser(@RequestBody User user) {
		userService.createUser(user);
		
		return user;
	}
	
	@RequestMapping(
			value="/user/{email}",
			method=RequestMethod.GET)
	public Boolean getUserByEmail(@PathVariable("email") String email) {
		return userService.getUserByEmail(email);
	}
	
	
	@RequestMapping(
			value="/login",
			method=RequestMethod.POST)
	public ResponseEntity<User> authenticateUser(@RequestBody User user) {
		
		return userService.authenticateUser(user);
	}
	
}
