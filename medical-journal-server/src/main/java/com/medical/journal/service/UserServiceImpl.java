package com.medical.journal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import org.springframework.stereotype.Service;

import com.medical.journal.model.User;

@Service
public class UserServiceImpl implements UserService {

	private List<User> allUsers = new ArrayList<>(Arrays.asList(
			new User(1, "email@test", "pass", "firstname", "lastname", "Publisher"),
			new User(2, "email1@test", "pass1", "firstname1", "lastname1", "Subscriber")
			));


    @Override
    public List<User> getUsers() {
		return allUsers;
    }

    @Override
    public User getUser(int id) {
        return allUsers.stream().filter(t -> t.getId() == id).findFirst().get();
    }

    @Override
    public void createUser(User user) {
    	allUsers.add(user);
    }

    @Override
    public boolean getUserByEmail(String email) {
    	User userFound;
        userFound = allUsers.stream().filter(x -> email.equals(x.getEmail())).findAny().orElse(null);
        if(userFound != null){
        	return true;
        }
        return false;
    }

	@Override
	public User authenticateUser(User user) {
		for (User temp : allUsers) {
			if(temp.getEmail().equals(user.getEmail())){
				if(temp.getPassword().equals(user.getPassword())){
					return temp;
				}
			}
		}
		return null;
	}

}
