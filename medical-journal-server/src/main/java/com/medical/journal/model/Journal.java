package com.medical.journal.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="journal")
public class Journal {
	
	@Id
	private String id;
	@NotNull
	private String name;
	private String description;
	private String fileUrl;
	private String user;
	
	
	public Journal(){
		
	}
	public Journal(String name, String description, String fileUrl, String user) {
		//this.id = name;
		this.name = name;
		this.description = description;
		this.fileUrl = fileUrl;
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
	public void setUser(String user){
		this.user = user;
	}
	public String getUSer(){
		return this.user;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	
	@Override
	public String toString() {
		return String.format("Journal[Id=%s, name=%s, description=%s, fileUrl=%s]", id, name, description, fileUrl);
	}
}
