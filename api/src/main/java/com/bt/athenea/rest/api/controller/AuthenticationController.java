package com.bt.athenea.rest.api.controller;

import com.bt.athenea.rest.api.configurations.TokenProvider;
import com.bt.athenea.rest.api.model.payload.request.SignInRequestBody;
import com.bt.athenea.rest.api.model.payload.request.SignUpRequestBody;
import com.bt.athenea.rest.api.model.payload.response.AuthenticationResponseBody;
import com.bt.athenea.rest.api.model.roles.Role;
import com.bt.athenea.rest.api.model.roles.RoleName;
import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.repository.roles.RoleRepository;
import com.bt.athenea.rest.api.repository.users.UserRepository;
import com.bt.athenea.rest.api.service.impl.security.UserDetailsImpl;
import com.bt.athenea.rest.api.service.impl.security.UserDetailsServiceImpl;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(maxAge = 3600, origins = {"http://localhost:3000","http://localhost:5000"})
public class AuthenticationController {
	
	public static final Logger LOG = LoggerFactoryUtil.getLog(AuthenticationController.class);
	
	private UserDetailsServiceImpl userDetailsService;
	private UserRepository userRepository;
	private RoleRepository roleRepository;
	private AuthenticationManager authenticationManager;
	private TokenProvider tokenProvider;
	
	@Autowired
	public AuthenticationController(UserDetailsServiceImpl userDetailsService, UserRepository userRepository,
	                                AuthenticationManager authenticationManager, TokenProvider tokenProvider, RoleRepository roleRepository){
		this.userDetailsService = userDetailsService;
		this.authenticationManager= authenticationManager;
		this.userRepository = userRepository;
		this.tokenProvider = tokenProvider;
		this.roleRepository = roleRepository;
	}
	
	@GetMapping("/sign-in")
	public String helloWorld(){
		return "Hello World from AuthenticationController";
	}
	
	@PostMapping("/sign-in")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequestBody requestBody){
		String emailAddress = requestBody.getEmailAddress();
		String password = requestBody.getPassword();
		Objects.requireNonNull(emailAddress);
		Objects.requireNonNull(password);
		String tokenType = "Bearer";
		
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(emailAddress, password));
		final UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(emailAddress);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtToken = tokenProvider.generateToken(userDetails);
		
		if(userDetails!=null){
			List<String> roles = userDetails.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());
			
			User userLoaded = userRepository.findByEmailAddress(userDetails.getEmailAddress())
					.orElseThrow(() -> new UsernameNotFoundException("User not found with email address:" +emailAddress));
			
			return  ResponseEntity.ok(new AuthenticationResponseBody(userDetails.getUserId(),userLoaded.getFirstName(),
					userLoaded.getLastName(), userLoaded.getPosition(),userDetails.getUsername(),userDetails.getEmailAddress(), roles,
					jwtToken,tokenType));
		}else{
			return new ResponseEntity<>("Authentication Failed", new HttpHeaders(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/sign-up")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequestBody requestBody){
		if(userRepository.existsUserByEmailAddress(requestBody.getUsername())){
			return ResponseEntity
					.badRequest()
					.body("Error: User already exists with username"+requestBody.getUsername());
		}
		
		Date now = new Date();
		List<String> roleNames = requestBody.getRolesNames();
		List<Role> userRoles = new ArrayList<>();
		if(roleNames==null){
			Role roleUser = roleRepository.findByRoleName(RoleName.ROLE_USER)
					.orElseThrow(()-> new RuntimeException("Error: role not found"));
			userRoles.add(roleUser);
		}else{
			roleNames.forEach(role->{
				switch (role){
					case("ROLE_ADMIN"):
						Role roleAdmin = roleRepository.findByRoleName(RoleName.ROLE_ADMIN)
								.orElseThrow(()-> new RuntimeException("Error: role not found"));
						userRoles.add(roleAdmin);
						break;
					default:
						Role roleUser = roleRepository.findByRoleName(RoleName.ROLE_USER)
								.orElseThrow(()-> new RuntimeException("Error: role not found"));
						userRoles.add(roleUser);
					
				}
			});
		}
		
		String firstName= requestBody.getFirstName();
		String lastName = requestBody.getLastName();
		String userName = requestBody.getUsername();
		boolean agreeToTermsOfUse = requestBody.getAgreedToTerms();
		String position = requestBody.getPosition();
		String password = requestBody.getPassword();
		User userToCreate = new User(userName, firstName,
				lastName,agreeToTermsOfUse,position,
				new BCryptPasswordEncoder(11).encode(password),now, now,userRoles);
		userRepository.save(userToCreate);
		return ResponseEntity.ok().body("User created successfully");
	}
	
}
