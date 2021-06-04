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
	@NotBlank
	private String firstName;
	
	@Column
	@NotBlank
	private String lastName;
	
	private boolean agreeToTerms;
	
	@Column
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
	
	public boolean isAgreeToTerms() {
		return agreeToTerms;
	}
	
	public void setAgreeToTerms(boolean agreeToTerms) {
		this.agreeToTerms = agreeToTerms;
	}
	
	public String getPosition() {
		return position;
	}
	
	public void setPosition(String position) {
		this.position = position;
	}
	
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
	
	
	private byte[] profilePicture;
	
	private String dateOfBirth;
	private GenderName gender;
	private String address;
	private String mobilePhone;
	private String workPhone;
	private String organizationName;
	private String departmentName;
	private String hireDate;
	
	public User(@NotBlank @Size(max = 50) @Email String emailAddress,
	            @NotBlank String firstName, @NotBlank String lastName,
	            boolean agreeToTerms, String position,
	            @NotBlank @Size(max = 150) String password, Date createdAt,
	            Date updatedAt, List<Role> userRoles) {
		this.emailAddress = emailAddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.agreeToTerms = agreeToTerms;
		this.position = position;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.userRoles = userRoles;
	}
	
	public User() {
	}
	
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
	public GenderName getGender() {
		return gender;
	}
	
	public void setGender(GenderName gender) {
		this.gender = gender;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getMobilePhone() {
		return mobilePhone;
	}
	
	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}
	
	public String getWorkPhone() {
		return workPhone;
	}
	
	public void setWorkPhone(String workPhone) {
		this.workPhone = workPhone;
	}
	
	public String getOrganizationName() {
		return organizationName;
	}
	
	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}
	
	public String getDepartmentName() {
		return departmentName;
	}
	
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	
	public String getHireDate() {
		return hireDate;
	}
	
	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
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
	
	public User(@NotBlank @Size(max = 50) @Email String emailAddress,
	            @NotBlank String firstName, @NotBlank String lastName,
	            boolean agreeToTerms, @NotBlank @Size(max = 150) String password,
	            Date createdAt, Date updatedAt, List<Role> userRoles) {
		this.emailAddress = emailAddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.agreeToTerms = agreeToTerms;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.userRoles = userRoles;
	}
	
	public byte[] getProfilePicture() {
		return profilePicture;
	}
	
	public void setProfilePicture(byte[] profilePicture) {
		this.profilePicture = profilePicture;
	}
}
