package com.bt.athenea.rest.api.controller;

import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(maxAge = 3600, origins = {"http://localhost:3000","http://localhost:5000"})
public class FileUploadController {
	
	private Logger LOG = LoggerFactoryUtil.getLog(FileUploadController.class);
	
	@PostMapping("/upload")
	public ResponseEntity<String> uploadData(@RequestParam("file") MultipartFile file) throws Exception {
		if (file == null) {
			throw new RuntimeException("You must select a file for uploading");
		}
		InputStream inputStream = file.getInputStream();
		String originalName = file.getOriginalFilename();
		String name = file.getName();
		String contentType = file.getContentType();
		long size = file.getSize();
		LoggerFactoryUtil.writeInfoMessage(LOG, "inputStream: " + inputStream);
		LoggerFactoryUtil.writeInfoMessage(LOG, "originalName: " + originalName);
		LoggerFactoryUtil.writeInfoMessage(LOG, "name: " + name);
		LoggerFactoryUtil.writeInfoMessage(LOG, "contentType: " + contentType);
		LoggerFactoryUtil.writeInfoMessage(LOG,"size: " + size);
		// Do processing with uploaded file data in Service layer
		return new ResponseEntity<String>(originalName, HttpStatus.OK);
	}
}
