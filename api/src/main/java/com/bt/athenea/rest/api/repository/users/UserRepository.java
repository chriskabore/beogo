package com.bt.athenea.rest.api.repository.users;

import com.bt.athenea.rest.api.model.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	Optional<User> findByEmailAddress(String emailAddress);
	Boolean existsUserByEmailAddress(String emailAddress);
}
