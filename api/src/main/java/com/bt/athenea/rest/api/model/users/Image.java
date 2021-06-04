package com.bt.athenea.rest.api.model.users;

import javax.persistence.*;

public class Image {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long imageId;
	
	@Column
	private String imageName;
	
	@Column
	private String imageType;
	
	@Lob
	@Column
	private byte[] image;
	
	@OneToOne(mappedBy = "userProfilePicture")
	private User userProfilePicture;
}
