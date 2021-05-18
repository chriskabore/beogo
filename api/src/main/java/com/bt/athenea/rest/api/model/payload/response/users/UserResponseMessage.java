package com.bt.athenea.rest.api.model.payload.response.users;

import com.bt.athenea.rest.api.model.users.User;

public class UserResponseMessage {
	
	private String message;
	
	private User responseUser;
	
	
	public UserResponseMessage(String message, User responseUser) {
		this.message = message;
		this.responseUser = responseUser;
	}
	
	public UserResponseMessage(String message) {
		this.message = message;
	}
	
	public UserResponseMessage() {
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public User getResponseUser() {
		return responseUser;
	}
	
	public void setResponseUser(User responseUser) {
		this.responseUser = responseUser;
	}
}
