package com.medical.journal.model;

import org.springframework.data.annotation.Id;

public class Subscription {
	
	@Id
	private String id;
	private String userId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
}
