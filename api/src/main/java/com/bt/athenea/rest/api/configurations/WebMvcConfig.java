package com.bt.athenea.rest.api.configurations;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class WebMvcConfig implements WebMvcConfigurer {
	
	private final long MAX_AGE_SECS = 3600;
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**").allowedOrigins("*")
					.allowedMethods("HEAD", "GET", "PUT", "POST",
							"DELETE", "PATCH").allowedHeaders("*").maxAge(MAX_AGE_SECS);
		
	}
	
	
}
