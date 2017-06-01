/**
 * 
 */
package com.medical.journal.service;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.medical.journal.model.Journal;

/**
 * @author linux-dev
 *
 */
public interface JournalRepository extends MongoRepository<Journal, String>{
	public Journal findByContentId(String id);
	public List<Journal> findAll();
	
}
