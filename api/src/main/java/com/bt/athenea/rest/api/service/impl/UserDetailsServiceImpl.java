package com.bt.athenea.rest.api.service.impl;

import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.repository.users.UserRepository;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(UserDetailsServiceImpl.class);
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
		LoggerFactoryUtil.writeEnterMethodMessage(LOG, "loadUserByUsername");
		Objects.requireNonNull(emailAddress);
		User userLoaded = userRepository.findByEmailAddress(emailAddress)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with email address:" +emailAddress));
		LoggerFactoryUtil.writeExitMethodMessage(LOG, "loadUserByUsername");
		
		return UserDetailsImpl.build(userLoaded);
	}
}
