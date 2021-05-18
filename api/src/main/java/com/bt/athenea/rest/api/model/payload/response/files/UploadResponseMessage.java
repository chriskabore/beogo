package com.bt.athenea.rest.api.model.payload.response.files;

public class UploadResponseMessage {
	private String message;
	
	private ResponseFile responseFile;
	
	public UploadResponseMessage(String message) {
		this.message = message;
	}
	
	public UploadResponseMessage(String message, ResponseFile responseFile) {
		this.message = message;
		this.responseFile=responseFile;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public ResponseFile getResponseFile() {
		return responseFile;
	}
	
	public void setResponseFile(ResponseFile responseFile) {
		this.responseFile = responseFile;
	}
}
