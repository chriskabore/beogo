package com.bt.athenea.rest.api.configurations;

import com.bt.athenea.rest.api.model.roles.RoleName;
import com.bt.athenea.rest.api.model.roles.Role;
import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.repository.roles.RoleRepository;
import com.bt.athenea.rest.api.repository.users.UserRepository;
import com.bt.athenea.rest.api.service.impl.security.UserDetailsImpl;
import com.bt.athenea.rest.api.service.impl.security.UserDetailsServiceImpl;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class AtheneaRunner implements CommandLineRunner {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(AtheneaRunner.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	UserDetailsServiceImpl userDetailsService;
	
	
	@Override
	public void run(String... args) throws Exception {
		roleRepository.deleteAll();
		userRepository.deleteAll();
		
		List<Role> userRoles = new ArrayList<>();
		
		Role roleUser = new Role(RoleName.ROLE_USER);
		Role roleAdmin = new Role(RoleName.ROLE_ADMIN);
		roleRepository.save(roleUser);
		roleRepository.save(roleAdmin);
		String password="secret";
		String encodedPassword = new BCryptPasswordEncoder(11).encode(password);
		String testEmailAddress= "kirsikabore@gmail.com";
		String firstName = "Kirsi Armand";
		String lastName = "KABORE";
		String position = "Project Coordinator";
		
		userRoles.add(roleUser);
		userRoles.add(roleAdmin);
		User testUser = new User();
		testUser.setEmailAddress(testEmailAddress);
		testUser.setPassword(encodedPassword);
		testUser.setUserRoles(userRoles);
		testUser.setFirstName(firstName);
		testUser.setLastName(lastName);
		testUser.setPosition(position);
		Date now = new Date();
		testUser.setCreatedAt(now);
		testUser.setUpdatedAt(now);
		userRepository.save(testUser);
		userRepository.findAll().forEach(
				(user)->{
					LoggerFactoryUtil.writeInfoMessage(LOG, "{}:"+user.getEmailAddress());
					user.getUserRoles().forEach((role)->{
						LoggerFactoryUtil.writeInfoMessage(LOG,"has role: "+role.getRoleName().name());
					});
				}
		);
		
		UserDetailsImpl userLoaded = (UserDetailsImpl) userDetailsService.loadUserByUsername(testEmailAddress);
		
		if(userLoaded!=null){
			LoggerFactoryUtil.writeInfoMessage(LOG, "{}:"+userLoaded.getEmailAddress());
			LoggerFactoryUtil.writeInfoMessage(LOG, "password: "+userLoaded.getPassword());
			userLoaded.getAuthorities().forEach((role)->{
				LoggerFactoryUtil.writeInfoMessage(LOG,"has authority: "+role.getAuthority());
			});
		}
	
	}
}
