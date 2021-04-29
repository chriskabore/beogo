package com.bt.athenea.rest.api.service.impl.files;

import com.bt.athenea.rest.api.model.files.File;
import com.bt.athenea.rest.api.repository.files.FileRepository;
import com.bt.athenea.rest.api.service.FileService;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public class FileServiceImpl implements FileService {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(FileServiceImpl.class);
	
	
	private FileRepository fileRepository;
	
	@Autowired
	public FileServiceImpl(FileRepository fileRepository) {
		this.fileRepository = fileRepository;
	}
	
	@Override
	public File storeFile(MultipartFile file) throws IOException {
		
		String originalName = file.getOriginalFilename();
		String contentType = file.getContentType();
		Long sizeInMB = file.getSize() / (1024 * 1024);
		String fileName = StringUtils.cleanPath(originalName);
		File fileToStore = new File(fileName, contentType, file.getBytes(), sizeInMB);
		return fileRepository.save(fileToStore);
	}
	
	@Override
	public File getFile(Long fileId) {
		return fileRepository.findByFileId(fileId).get();
	}
	
	@Override
	public Stream<File> getAllFiles() {
		return fileRepository.findAll().stream();
	}
}
