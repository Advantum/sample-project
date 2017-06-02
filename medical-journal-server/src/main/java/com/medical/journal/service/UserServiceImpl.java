package com.medical.journal.service;

import java.util.ArrayList;
import java.util.Arrays;
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

	/*@Override
    public User getUser(int id) {
        return allUsers.stream().filter(t -> t.getId() == id).findFirst().get(); 
    }*/
	
	@Override
	public User getUser(String id) {
		return userRepository.findById(id);
	}
	
	
	  /*@Override
	    public boolean getUserByEmail(String email) {
	    	User userFound;
	        userFound = allUsers.stream().filter(x -> email.equals(x.getEmail())).findAny().orElse(null); 
	        if(userFound != null){
	        	return true;
	        }
	        return false;
	    }*/
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
	 public User authenticateUser(User user) {
		for (User temp : userRepository.findAll() ) {
			if(temp.getEmail().equals(user.getEmail())){
				if(temp.getPassword().equals(user.getPassword())){
					return temp;
				}
			}
		}
		return null;
	}
}
