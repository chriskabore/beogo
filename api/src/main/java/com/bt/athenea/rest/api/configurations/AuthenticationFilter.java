package com.bt.athenea.rest.api.configurations;

import com.bt.athenea.rest.api.service.impl.security.UserDetailsServiceImpl;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

@Component
public class AuthenticationFilter extends OncePerRequestFilter {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(AuthenticationFilter.class);
	
	private UserDetailsServiceImpl userDetailsService;
	private TokenProvider tokenProvider;
	
	@Autowired
	public AuthenticationFilter(UserDetailsServiceImpl userDetailsService, TokenProvider tokenProvider){
		this.tokenProvider = tokenProvider;
		this.userDetailsService = userDetailsService;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
	                                FilterChain filterChain) throws ServletException, IOException {
		
		try{
			String token = getTokenStringFromRequest(request);
			if(StringUtils.hasText(token) && tokenProvider.validateTokenString(token)){
				String username = tokenProvider.getUsernameFromToken(token);
				Objects.requireNonNull(username);
				UserDetails userDetails =  userDetailsService.loadUserByUsername(username);
				UsernamePasswordAuthenticationToken authenticationToken =  new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			}
		
		}catch (Exception e){
			LoggerFactoryUtil.writeErrorMessage(LOG, e, "Cannot set user authentication in security context: {}");
		}
		
		filterChain.doFilter(request,response);
	}
	
	private String getTokenStringFromRequest(HttpServletRequest request) {
		LoggerFactoryUtil.writeEnterMethodMessage(LOG, "getTokenStringFromRequest");
		
		String bearerToken = request.getHeader("Authorization");
		
		if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
			int length = bearerToken.length();
			LoggerFactoryUtil.writeExitMethodMessage(LOG, "getTokenStringFromRequest");
			return bearerToken.substring(7, length);
		}else{
			LoggerFactoryUtil.writeWarningMessage(LOG, "Token does not begin with Bearer String");
		}
		LoggerFactoryUtil.writeExitMethodMessage(LOG, "getTokenStringFromRequest");
		return null;
	}
}
