package com.medical.journal.service;

import com.medical.journal.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    User getUser(int id);

    void createUser(User user);
    
}