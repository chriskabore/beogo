package com.bt.athenea.rest.api.service.impl.files;

import com.bt.athenea.rest.api.model.files.File;
import com.bt.athenea.rest.api.repository.files.FileRepository;
import com.bt.athenea.rest.api.service.FileService;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.stream.Stream;


@Service
public class FileServiceImpl implements FileService {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(FileServiceImpl.class);
	
	
	private FileRepository fileRepository;
	
	@Autowired
	public FileServiceImpl(FileRepository fileRepository) {
		this.fileRepository = fileRepository;
	}
	
	@Override
	public File storeFile(File fileToStore) throws IOException {
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
