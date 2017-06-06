package com.medical.journal.service;

import com.medical.journal.model.User;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface UserService {
	
    List<User> getUsers();
    User getUser(String id);
    Boolean getUserByEmail(String email);
    User createUser(User user);
    ResponseEntity<User> authenticateUser(User user);
    ResponseEntity<User> updateUser(User user);
}