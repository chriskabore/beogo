package com.bt.athenea.rest.api.utils;

import javax.servlet.http.HttpServletRequest;

public class AtheneaRequestHelper {
	
	public static String getClientIPAddress (HttpServletRequest request){
		String remoteIPAddress = "";
		if (request != null) {
			remoteIPAddress = request.getHeader("X-FORWARDED-FOR");
			if (remoteIPAddress == null || "".equals(remoteIPAddress)) {
				remoteIPAddress = request.getRemoteAddr();
			}
		}
		
		return remoteIPAddress;
	}
	
	public static String getUserAgent(HttpServletRequest request) {
		String userAgent = "";
		if (request != null) {
			userAgent = request.getHeader("User-Agent");
		}
		return userAgent;
	}
}
