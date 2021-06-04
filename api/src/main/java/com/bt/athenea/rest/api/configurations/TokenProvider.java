package com.bt.athenea.rest.api.configurations;

import com.bt.athenea.rest.api.service.impl.security.UserDetailsImpl;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.io.Serializable;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class TokenProvider implements Serializable {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(TokenProvider.class);
	private static final String ROLES = "roles";
	private static final String CLIENT_IP_ADDRESS = "clientIPAddress";
	private static final String USER_AGENT = "userAgent";
	private static final String ISSUED_AT = "iat";
	private static final String EXPIRATION = "exp";
	
	private static long serialVersionUID = 150420211805191184L;
	
	
	@Value("${security.jwt.token.secret-key:secret-key}")
	private String secret;
	
	@Value("${security.jwt.token.expire-length}")
	private long tokeValidityInSeconds = 86400;
	
	@Value("${security.jwt.token.extended-expire-length}")
	private long tokeValidityInSecondsExtended = 604800;
	
	@PostConstruct
	protected void init() {
		secret = Base64.getEncoder().encodeToString(secret.getBytes());
	}
	
	
	
	
	
	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	public Date getIssuedAtDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getIssuedAt);
	}
	
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	
	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}
	
	private Boolean ignoreTokenExpiration(String token) {
		// here you specify tokens, for that the expiration is ignored
		return false;
	}
	
	public String generateToken(UserDetails userDetails, Boolean rememberMe, String clientIPAddress,String userAgent) {
		
		Map<String, Object> claims = new HashMap<>();
		
		final Date createdDate = new Date();
		Date expirationDate = calculateExpirationDate(createdDate);
		if(rememberMe){
			expirationDate = calculateExpirationDate(createdDate, tokeValidityInSecondsExtended);
		}
		Objects.requireNonNull(userDetails);
		Objects.requireNonNull(clientIPAddress);
		Objects.requireNonNull(userAgent);
		
		final List<String> roleNames = userDetails.getAuthorities()
				.stream()
				.map(GrantedAuthority::getAuthority)
				.collect(Collectors.toList());
		
		claims.put(ROLES,roleNames);
		claims.put(CLIENT_IP_ADDRESS, clientIPAddress);
		claims.put(USER_AGENT, userAgent);
		claims.put(ISSUED_AT, createdDate);
		claims.put(EXPIRATION, expirationDate);
		
		return doGenerateToken(claims, userDetails.getUsername());
	}
	
	public List<String> getRoles(String token) {
		return getClaimFromToken(token, claims -> (List) claims.get(ROLES));
	}
	
	
	private String doGenerateToken(Map<String, Object> claims, String subject) {
		
		return Jwts.builder().setClaims(claims).setSubject(subject).signWith(SignatureAlgorithm.HS512, secret).compact();
	}
	
	public Boolean canTokenBeRefreshed(String token) {
		return (!isTokenExpired(token) || ignoreTokenExpiration(token));
	}
	
	public String refreshToken(String token) {
		final Date createdDate = new Date();
		final Date expirationDate = calculateExpirationDate(createdDate);
		
		final Claims claims = getAllClaimsFromToken(token);
		claims.setIssuedAt(createdDate);
		claims.setExpiration(expirationDate);
		
		return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact();
	}
	
	public Boolean validateToken(String token, UserDetails userDetails) {
		UserDetailsImpl user = (UserDetailsImpl) userDetails;
		final String username = getUsernameFromToken(token);
		return (username.equals(user.getUsername()) && !isTokenExpired(token));
	}
	
	private Date calculateExpirationDate(Date createdDate) {
		return new Date(createdDate.getTime() + tokeValidityInSeconds * 1000);
	}
	
	private Date calculateExpirationDate(Date createdDate, Long tokenValidityInSecondsExtended){
		if(tokenValidityInSecondsExtended > (tokeValidityInSeconds * 1000)){
			return new Date(createdDate.getTime() +tokenValidityInSecondsExtended);
		}else{
			return calculateExpirationDate(createdDate);
		}
	}
	
	
	public String generateJwtToken(UserDetails userDetails, Boolean rememberMe){
		return generateToken(userDetails, rememberMe,null,null);
	}
	
	public boolean validateTokenString(String token){
		boolean isValidToken = false;
		if(token!=null && StringUtils.hasLength(token)){
			try{
				Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
				isValidToken = true;
			}catch (SignatureException se){
				LoggerFactoryUtil.writeErrorMessage(LOG,se,"Invalid JWT signature: {}");
			}catch (MalformedJwtException me){
				LoggerFactoryUtil.writeErrorMessage(LOG,me,"Invalid JWT token: {}");
			}catch (ExpiredJwtException ee){
				LoggerFactoryUtil.writeErrorMessage(LOG,ee,"JWT token is expired : {}");
			}catch (UnsupportedJwtException ue){
				LoggerFactoryUtil.writeErrorMessage(LOG,ue,"JWT token is not supported : {}");
			}catch (IllegalArgumentException ie){
				LoggerFactoryUtil.writeErrorMessage(LOG,ie,"JWT claims string is empty : {}");
			}
		}
		return isValidToken;
	}
	
	
	public boolean validateTokenString(String token, String clientIPAddress, String userAgent) {
		boolean isValid = false;
		String tokenClientIPAddress ="";
		String tokenUserAgent="";
		
		boolean isStringValidToken  = validateTokenString(token);
		if(isStringValidToken){
			tokenClientIPAddress = (String)getClaimFromToken(token, claims -> claims.get(CLIENT_IP_ADDRESS));
			tokenUserAgent = (String) getClaimFromToken(token, claims -> claims.get(USER_AGENT));
		}
		if(tokenClientIPAddress!=null && !"".equals(tokenClientIPAddress) && (tokenUserAgent!=null && !"".equals(tokenUserAgent))){
			if(tokenClientIPAddress.equals(clientIPAddress) && tokenUserAgent.equals(userAgent)){
				isValid = true;
			}
		}
		return isValid;
	}
	
	
}
