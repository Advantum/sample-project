package com.medical.journal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medical.journal.model.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	public UserRepository userRepository;
	
	@Override
	 public List<User> getUsers() {
		 return userRepository.findAll();
	 }

	 @Override
	 public User getUserByEmail(String email) {
		 return userRepository.findByEmail(email);
	 }
	 
	 @Override
	 public User createUser(User user) {
		 return userRepository.save(user);
	 }
	 
	 @Override
	 public User authenticateUser(User user) {
		 return userRepository.save(user);
	 }
}
