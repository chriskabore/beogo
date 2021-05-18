package com.bt.athenea.rest.api.controller;

import com.bt.athenea.rest.api.model.payload.response.users.UserResponseMessage;
import com.bt.athenea.rest.api.model.users.User;
import com.bt.athenea.rest.api.service.UserService;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(maxAge = 3600, origins = {"http://localhost:3000","http://localhost:5000"})
public class UserController {
	
	public static final Logger LOG = LoggerFactoryUtil.getLog(UserController.class);
	
	
	@Autowired
	UserService userService;
	
	@GetMapping("/{emailAddress}")
	public ResponseEntity<?> getUser(@PathVariable String emailAddress){
		
		Objects.requireNonNull(emailAddress);
		String message ="";
		
		User userToLoad = userService.getUserByEmail(emailAddress);
		
		if(userToLoad!=null){
			message="Successfully retrieved user!";
			return ResponseEntity.ok().body(new UserResponseMessage(message,userToLoad));
		}else{
			message ="Could not find user with email: " + emailAddress;
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new UserResponseMessage(message));
		}
	}
}
