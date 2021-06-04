package com.bt.athenea.rest.api.model.payload.response.auth;

import java.util.List;

public class AuthenticationResponse {
	private Long id;
	private String username;
	private String emailAddress;
	private List<String> roles;
	private String accessToken;
	private String tokenType = "Bearer";
	
	
	
	public AuthenticationResponse(Long userId,String username, String emailAddress,
	                              List<String> roles, String accessToken,
	                              String tokenType) {
		this.username = username;
		this.emailAddress = emailAddress;
		this.roles = roles;
		this.accessToken = accessToken;
		this.tokenType = tokenType;
		this.id = userId;
		
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
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
}
