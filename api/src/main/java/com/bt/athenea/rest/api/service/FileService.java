package com.bt.athenea.rest.api.service;

import com.bt.athenea.rest.api.model.files.File;

import java.io.IOException;
import java.util.stream.Stream;

public interface FileService {
	
	File storeFile(File file) throws IOException;
	File getFile(Long fileId);
	Stream<File> getAllFiles();
}
