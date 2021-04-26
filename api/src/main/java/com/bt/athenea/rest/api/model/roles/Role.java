package com.bt.athenea.rest.api.model.roles;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer roleId;
	
	@Enumerated(EnumType.STRING)
	@Column
	private RoleName roleName;
	
	public Role(Integer roleId, RoleName roleName) {
		this.roleId = roleId;
		this.roleName = roleName;
	}
	
	public Role() {
	}
	
	public Role(RoleName roleName) {
		this.roleName= roleName;
	}
	
	public Integer getRoleId() {
		return roleId;
	}
	
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	
	public RoleName getRoleName() {
		return roleName;
	}
	
	public void setRoleName(RoleName roleName) {
		this.roleName = roleName;
	}
}
