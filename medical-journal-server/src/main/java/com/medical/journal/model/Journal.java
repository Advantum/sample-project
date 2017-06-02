package com.medical.journal.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
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
	private String publisher;
	
	
	public Journal(){
		
	}
	public Journal(String id, String name, String description, String file, String publisher) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.file = file;
		this.publisher = publisher;
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
	public void setPublisher(String publisher){
		this.publisher = publisher;
	}
	public String getPublisher(){
		return this.publisher;
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
