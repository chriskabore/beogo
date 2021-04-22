package com.bt.athenea.rest.api.configurations;

import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AtheneaAuthenticationEntryPoint  implements AuthenticationEntryPoint {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(AtheneaAuthenticationEntryPoint.class);
	
	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
	                     AuthenticationException authException) throws IOException, ServletException {
		LoggerFactoryUtil.writeErrorMessage(LOG, authException,"Unauthorized error: {}");
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"Error: Unauthorized");
	}
}
