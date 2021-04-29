package com.bt.athenea.rest.api.configurations;

import com.bt.athenea.rest.api.service.impl.security.UserDetailsImpl;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import io.jsonwebtoken.*;
import io.jsonwebtoken.impl.DefaultClock;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class TokenProvider implements Serializable {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(TokenProvider.class);
	
	private static long serialVersionUID = 150420211805191184L;
	
	@Value("${athenea.rest.api.jwt.signing.key.secret}")
	private String secret;
	
	@Value("${athenea.rest.api.jwt.token.expiration.in.seconds}")
	private Long tokeValidityInSeconds;
	
	private Clock clock = DefaultClock.INSTANCE;
	
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
		return expiration.before(clock.now());
	}
	
	private Boolean ignoreTokenExpiration(String token) {
		// here you specify tokens, for that the expiration is ignored
		return false;
	}
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return doGenerateToken(claims, userDetails.getUsername());
	}
	
	private String doGenerateToken(Map<String, Object> claims, String subject) {
		final Date createdDate = clock.now();
		final Date expirationDate = calculateExpirationDate(createdDate);
		
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(createdDate)
				.setExpiration(expirationDate).signWith(SignatureAlgorithm.HS512, secret).compact();
	}
	
	public Boolean canTokenBeRefreshed(String token) {
		return (!isTokenExpired(token) || ignoreTokenExpiration(token));
	}
	
	public String refreshToken(String token) {
		final Date createdDate = clock.now();
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
	
	
	public String generateJwtToken(UserDetails userDetails){
		return generateToken(userDetails);
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
}
