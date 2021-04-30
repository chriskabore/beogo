package com.bt.athenea.rest.api.model.files.message;

public class ResponseFile {
	private Long fileId;
	private String fileName;
	private String url;
	private String type;
	private long sizeInMB;
	
	public ResponseFile(Long fileId, String fileName, String url, String type, long sizeInMB) {
		this.fileName = fileName;
		this.url = url;
		this.type = type;
		this.sizeInMB = sizeInMB;
		this.fileId = fileId;
	}
	
	public Long getFileId() {
		return fileId;
	}
	
	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}
	
	public String getFileName() {
		return fileName;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public long getSizeInMB() {
		return sizeInMB;
	}
	
	public void setSizeInMB(long sizeInMB) {
		this.sizeInMB = sizeInMB;
	}
}
