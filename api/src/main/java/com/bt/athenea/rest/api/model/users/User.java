package com.bt.athenea.rest.api.model.users;

import com.bt.athenea.rest.api.model.roles.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column
	@NotBlank
	@Size(max = 50)
	@Email
	private String emailAddress;
	
	@Column
	@JsonIgnore
	@NotBlank
	@Size(max = 150)
	private String password;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name = "user_roles",
	 joinColumns = @JoinColumn(name = "user_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private List<Role> userRoles = new ArrayList<>();
	
	
	public User(Long userId, @NotBlank @Size(max = 50) @Email String emailAddress,
	            @NotBlank @Size(max = 150) String password, List<Role> userRoles) {
		this.userId = userId;
		this.emailAddress = emailAddress;
		this.password = password;
		this.userRoles = userRoles;
	}
	
	public User() {
	}
	
	public User(@NotBlank @Size(max = 50) @Email String emailAddress,
	            @NotBlank @Size(max = 150) String password, List<Role> userRoles) {
		this.emailAddress = emailAddress;
		this.password = password;
		this.userRoles = userRoles;
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
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public List<Role> getUserRoles() {
		return userRoles;
	}
	
	public void setUserRoles(List<Role> userRoles) {
		this.userRoles = userRoles;
	}
	
	public Date getCreatedAt() {
		return createdAt;
	}
	
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	public Date getUpdatedAt() {
		return updatedAt;
	}
	
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public String getUsername(){
		return this.emailAddress;
	}
	
}
