package com.medical.journal.model;

import javax.validation.constraints.NotNull;

public class Journal {
	
	@NotNull
	private String id;
	@NotNull
	private String name;
	private String description;
	private String fileUrl;
	
	public Journal(String id, String name, String description, String fileUrl) {
		
		this.id = id;
		this.name = name;
		this.description = description;
		this.fileUrl = fileUrl;
				
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
