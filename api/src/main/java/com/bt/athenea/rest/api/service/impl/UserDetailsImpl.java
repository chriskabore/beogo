package com.bt.athenea.rest.api.service.impl;

import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.slf4j.Logger;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
	
	private static final long serialVersionUID = 150420211709191184L;
	private static final Logger LOG = LoggerFactoryUtil.getLog(UserDetailsImpl.class);
	
	private Long userId;
	private String username;
	private String emailAddress;
	
	@JsonIgnore
	private String password;
	
	private boolean isAccountActive = true;
	
	private boolean isTokenExpired = false;
	
	
	private List<? extends GrantedAuthority> authorities;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
	@Override
	public String getPassword() {
		return password;
	}
	
	@Override
	public String getUsername() {
		return emailAddress;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return !this.isTokenExpired && this.isAccountActive ;
	}
	
	@Override
	public boolean isAccountNonLocked() {
		return this.isAccountActive;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		return !this.isTokenExpired;
	}
	
	@Override
	public boolean isEnabled() {
		return this.isAccountActive;
	}
	
	public static UserDetailsImpl build(User user){
		LoggerFactoryUtil.writeEnterMethodMessage(LOG,"build");
		List<GrantedAuthority> authorities = user.getUserRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getRoleName().name()))
				.collect(Collectors.toList());
		
		LoggerFactoryUtil.writeExitMethodMessage(LOG, "build");
		return new UserDetailsImpl(
				user.getUserId(),
				user.getEmailAddress(),
				user.getEmailAddress(),
				user.getPassword(),
				authorities
		);
	}
	
	
	public UserDetailsImpl(Long userId, String username, String emailAddress, String password, List<? extends GrantedAuthority>authorities) {
		this.userId =userId;
		this.emailAddress = emailAddress;
		this.password = password;
		this.authorities = authorities;
		this.username = username;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		if(this==obj){
			return true;
		}
		if(obj==null || getClass()!=obj.getClass()){
			return false;
		}
		UserDetailsImpl user = (UserDetailsImpl)obj;
		return Objects.equals(userId,user.userId);
	}
	
	public Long getUserId() {
		return userId;
	}
	
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}
	
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean isAccountActive() {
		return isAccountActive;
	}
	
	public void setAccountActive(boolean accountActive) {
		isAccountActive = accountActive;
	}
	
	public boolean isTokenExpired() {
		return isTokenExpired;
	}
	
	public void setTokenExpired(boolean tokenExpired) {
		isTokenExpired = tokenExpired;
	}
	
	public void setAuthorities(List<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
}
