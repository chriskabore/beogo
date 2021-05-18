package com.bt.athenea.rest.api.service.impl.users;

import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.repository.users.UserRepository;
import com.bt.athenea.rest.api.service.UserService;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
	
	private static Logger LOG = LoggerFactoryUtil.getLog(UserServiceImpl.class);
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public User getUserById(Long userId) {
		Optional<User> userToFetch = userRepository.findByUserId(userId);
		return userToFetch.get();
	}
	
	@Override
	public User getUserByEmail(String emailAddress) {
		return userRepository.findByEmailAddress(emailAddress)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with email address:" +emailAddress));
	}
	
	@Override
	public User saveUser(User userToSave) {
		return null;
	}
	
	@Override
	public User updateUser(User userToUpdate) {
		return null;
	}
	
	@Override
	public Boolean deleteUserById(Long userId) {
		return null;
	}
	
	@Override
	public List<User> getAllUsers() {
		return null;
	}
}
