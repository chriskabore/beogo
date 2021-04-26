package com.bt.athenea.rest.api.repository.roles;

import com.bt.athenea.rest.api.model.roles.RoleName;
import com.bt.athenea.rest.api.model.roles.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
	Optional<Role> findByRoleName(RoleName roleName);
}
