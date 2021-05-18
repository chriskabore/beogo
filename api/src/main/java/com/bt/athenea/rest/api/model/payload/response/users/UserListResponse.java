package com.bt.athenea.rest.api.model.payload.response.users;

import com.bt.athenea.rest.api.model.users.User;

import java.util.ArrayList;
import java.util.List;

public class UserListResponse {
	
	private String message;
	
	private List<User> userList = new ArrayList<>();
	
	public UserListResponse(String message) {
		this.message = message;
	}
	
	public UserListResponse(String message, List<User> userList) {
		this.message = message;
		this.userList = userList;
	}
	
	public UserListResponse() {
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public List<User> getUserList() {
		return userList;
	}
	
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
}
