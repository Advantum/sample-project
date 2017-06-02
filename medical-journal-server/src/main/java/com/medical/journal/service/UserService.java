package com.medical.journal.service;

import com.medical.journal.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    User getUserByEmail(String id);

    User createUser(User user);
    
    User authenticateUser(User user);
}