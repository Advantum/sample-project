package com.medical.journal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public User getUser(String id) {
		return userRepository.findById(id);
	}
	
	
	 @Override
	 public Boolean getUserByEmail(String email) {
		 User user = userRepository.findByEmail(email);
		 return (Integer.valueOf(user.getId()) >= 0);
	 }
	 
	 @Override
	 public User createUser(User user) {
		 return userRepository.save(user);
	 }
	 
	 @Override
	 public ResponseEntity<User> authenticateUser(User user) {
		 User temp = userRepository.findByEmail(user.getEmail());
		 if(temp == null) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		} else {
			if(temp.getPassword().equals(user.getPassword())){
				return new ResponseEntity<User>(temp, HttpStatus.OK);
			}else{
				return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
			}
		}
	}


	@Override
	public ResponseEntity<User> updateUser(User user) {
		return new ResponseEntity<User>( userRepository.save(user), HttpStatus.OK );
	}
}
