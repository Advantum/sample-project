package com.medical.journal.service;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.medical.journal.model.User;

public interface UserRepository extends MongoRepository<User, String> {
	public User findByEmail(String email);
}
