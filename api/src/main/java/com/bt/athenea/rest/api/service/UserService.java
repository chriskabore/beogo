package com.bt.athenea.rest.api.service;

import com.bt.athenea.rest.api.model.users.User;

import java.util.List;

public interface UserService {
	
	User getUserById(Long userId);
	User getUserByEmail(String emailAddress);
	User saveUser(User userToSave);
	User updateUser (User userToUpdate);
	Boolean deleteUserById(Long userId);
	List<User> getAllUsers();
	
}
