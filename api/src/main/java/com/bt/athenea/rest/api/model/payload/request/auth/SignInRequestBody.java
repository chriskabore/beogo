package com.bt.athenea.rest.api.model.payload.request.auth;

public class SignInRequestBody {
	
	private String emailAddress;
	private String password;
	private Boolean rememberMe = false;
	
	
	public SignInRequestBody(String emailAddress, String password, Boolean rememberMe) {
		this.emailAddress = emailAddress;
		this.password = password;
		this.rememberMe = rememberMe;
	}
	
	public SignInRequestBody() {
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}
	
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Boolean getRememberMe() {
		return rememberMe;
	}
	
	public void setRememberMe(Boolean rememberMe) {
		this.rememberMe = rememberMe;
	}
}
