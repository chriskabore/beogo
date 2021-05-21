package com.bt.athenea.rest.api.model.payload.response.auth;

import java.util.List;

public class AuthenticationResponse {
	
	private String username;
	private String emailAddress;
	private List<String> roles;
	private String accessToken;
	private String tokenType = "Bearer";
	private String firstName;
	private String lastName;
	private String position;
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getPosition() {
		return position;
	}
	
	public void setPosition(String position) {
		this.position = position;
	}
	
	public AuthenticationResponse(String username, String emailAddress,
	                              List<String> roles, String accessToken,
	                              String tokenType, String firstName, String lastName,
	                              String position) {
		this.username = username;
		this.emailAddress = emailAddress;
		this.roles = roles;
		this.accessToken = accessToken;
		this.tokenType = tokenType;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
	}
	
	
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}
	
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	
	public List<String> getRoles() {
		return roles;
	}
	
	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	public String getAccessToken() {
		return accessToken;
	}
	
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	
	public String getTokenType() {
		return tokenType;
	}
	
	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
}
