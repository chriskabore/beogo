package com.bt.athenea.rest.api.model.roles;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer roleId;
	
	private ERole roleName;
	
	public Role(Integer roleId, ERole roleName) {
		this.roleId = roleId;
		this.roleName = roleName;
	}
	
	public Role() {
	}
	
	public Role(ERole roleName) {
		this.roleName= roleName;
	}
	
	public Integer getRoleId() {
		return roleId;
	}
	
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	
	public ERole getRoleName() {
		return roleName;
	}
	
	public void setRoleName(ERole roleName) {
		this.roleName = roleName;
	}
}
