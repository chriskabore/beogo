package com.bt.athenea.rest.api.model.payload.request;

public class SignInRequestBody {
	
	private String emailAddress;
	private String password;
	
	public SignInRequestBody(String emailAddress, String password) {
		this.emailAddress = emailAddress;
		this.password = password;
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
}
