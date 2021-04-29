package com.bt.athenea.rest.api.model.files;

import javax.persistence.*;

@Entity
public class File {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fileId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "type")
	private String type;
	
	@Lob
	private byte[] data;
	
	@Column(name = "size_in_MB")
	private Long sizeInMB;
	
	
	public File(String name, String type, byte[] data, Long sizeInMB) {
		this.name = name;
		this.type = type;
		this.data = data;
		this.sizeInMB = sizeInMB;
	}
	
	public Long getFileId() {
		return fileId;
	}
	
	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public byte[] getData() {
		return data;
	}
	
	public void setData(byte[] data) {
		this.data = data;
	}
	
	public Long getSizeInMB() {
		return sizeInMB;
	}
	
	public void setSizeInMB(Long sizeInMB) {
		this.sizeInMB = sizeInMB;
	}
	
	public File() {
	}
}
