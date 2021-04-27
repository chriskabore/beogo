package com.bt.athenea.rest.api.model.payload.request;

import java.util.ArrayList;
import java.util.List;

public class SignUpRequestBody {
	private String emailAddress;
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	private Boolean agreedToTerms;
	private String position;
	private List<String> rolesNames = new ArrayList<>();
	
	public SignUpRequestBody(String emailAddress,
	                         String firstName, String lastName,
	                         String username, String password,
	                         Boolean agreedToTerms, String position,
	                         List<String> rolesNames) {
		this.emailAddress = emailAddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.agreedToTerms = agreedToTerms;
		this.position = position;
		this.rolesNames = rolesNames;
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}
	
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	
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
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Boolean getAgreedToTerms() {
		return agreedToTerms;
	}
	
	public void setAgreedToTerms(Boolean agreedToTerms) {
		this.agreedToTerms = agreedToTerms;
	}
	
	public String getPosition() {
		return position;
	}
	
	public void setPosition(String position) {
		this.position = position;
	}
	
	public List<String> getRolesNames() {
		return rolesNames;
	}
	
	public void setRolesNames(List<String> rolesNames) {
		this.rolesNames = rolesNames;
	}
}
