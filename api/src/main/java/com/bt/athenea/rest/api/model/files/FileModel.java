package com.bt.athenea.rest.api.model.files;

import javax.persistence.*;

@Entity
public class FileModel  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fileId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "type")
	private String type;
	
	@Lob
	@Column(name = "data", length = 1000)
	private byte[] data;
	
	public FileModel(String name, String type, byte[] data) {
		this.name = name;
		this.type = type;
		this.data = data;
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
	
	public FileModel() {
	}
}
