package com.bt.athenea.rest.api.controller;

import com.bt.athenea.rest.api.configurations.TokenProvider;
import com.bt.athenea.rest.api.model.payload.request.SignInRequestBody;
import com.bt.athenea.rest.api.model.payload.response.AuthenticationResponseBody;
import com.bt.athenea.rest.api.repository.users.UserRepository;
import com.bt.athenea.rest.api.service.impl.UserDetailsImpl;
import com.bt.athenea.rest.api.service.impl.UserDetailsServiceImpl;
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
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
	private AuthenticationManager authenticationManager;
	private TokenProvider tokenProvider;
	
	@Autowired
	public AuthenticationController(UserDetailsServiceImpl userDetailsService, UserRepository userRepository,
	                                AuthenticationManager authenticationManager, TokenProvider tokenProvider){
		this.userDetailsService = userDetailsService;
		this.authenticationManager= authenticationManager;
		this.userRepository = userRepository;
		this.tokenProvider = tokenProvider;
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
			return  ResponseEntity.ok(new AuthenticationResponseBody(userDetails.getUserId(),
					jwtToken,tokenType,userDetails.getUsername(),userDetails.getEmailAddress(),roles));
		}else{
			return new ResponseEntity<>("Authentication Failed", new HttpHeaders(), HttpStatus.BAD_REQUEST);
		}
	}
	
}
