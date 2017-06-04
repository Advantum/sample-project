package com.medical.journal.model;

import java.awt.List;
import java.util.ArrayList;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The Journal model template object
 * @author linux-dev
 *
 */
@Document(collection="journal")
public class Journal {
	
	@Id
	private String id;
	@NotNull
	private String name;
	private String description;
	private String file;
	
	@DBRef
	private User user;
	
	
	
	public Journal(){
		
	}
	public Journal(String name, String description, String file, User user) {
		this.id = name;
		this.name = name;
		this.description = description;
		this.file = file;
		this.user = user;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setUser(User user){
		this.user = user;
	}
	public User getUser(){
		return this.user;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	
	@Override
	public String toString() {
		return String.format("Journal[Id=%s, name=%s, description=%s]", id, name, description);
	}
}
