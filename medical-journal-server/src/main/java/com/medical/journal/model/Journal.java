package com.medical.journal.model;

import javax.validation.constraints.NotNull;

public class Journal {
	
	@NotNull
	private int id;
	@NotNull
	private String name;
	private String description;
	private String fileUrl;
	private User user;
	
	public Journal(int id, String name, String description, String fileUrl, int userId) {
		
		this.id = id;
		this.name = name;
		this.description = description;
		this.fileUrl = fileUrl;
		this.user = new User(userId, "", "", "", "", "");
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
}
