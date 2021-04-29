package com.bt.athenea.rest.api.service;

import com.bt.athenea.rest.api.model.files.File;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
public interface FileService {
	
	File storeFile(MultipartFile file) throws IOException;
	File getFile(Long fileId);
	Stream<File> getAllFiles();
}
