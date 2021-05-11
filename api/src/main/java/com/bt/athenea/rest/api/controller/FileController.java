package com.bt.athenea.rest.api.controller;

import com.bt.athenea.rest.api.model.files.File;
import com.bt.athenea.rest.api.model.files.message.ResponseFile;
import com.bt.athenea.rest.api.model.files.message.UploadResponseMessage;
import com.bt.athenea.rest.api.service.FileService;
import com.bt.athenea.rest.api.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(maxAge = 3600, origins = {"http://localhost:3000","http://localhost:5000"})
public class FileController {
	
	private static final Logger LOG = LoggerFactoryUtil.getLog(FileController.class);
	
	private FileService fileService;
	
	@Autowired
	public FileController(FileService fileService) {
		this.fileService = fileService;
	}
	
	
	@PostMapping("/upload")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file){
		
		String message ="";
		
		if (file == null) {
			message = "You must select a file for uploading";
			return ResponseEntity.badRequest().body(new UploadResponseMessage(message));
		}
		
		String originalName = file.getOriginalFilename();
		message = "Uploaded the file successfully: " + originalName;
		
		
		ResponseFile fileUploaded = uploadData(file);
		
		if(fileUploaded!=null){
			LoggerFactoryUtil.writeInfoMessage(LOG,message);
			return ResponseEntity.ok().body(new UploadResponseMessage(message, fileUploaded));
		}else{
			message = "Could not upload the file: "+ originalName+"!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new UploadResponseMessage(message));
		}
		
	}
	
	private ResponseFile uploadData(MultipartFile file) {
		ResponseFile responseFile = null;
		
		try {
			String originalName = file.getOriginalFilename();
			String contentType = file.getContentType();
			Long sizeInMB = file.getSize() / (1024 * 1024);
			String fileName = StringUtils.cleanPath(originalName);
			byte[] compressedData = compressBytes(file.getBytes());
			
			File fileToStore = new File(fileName, contentType, compressedData, sizeInMB);
			
			File fileStored = fileService.storeFile(fileToStore);
			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
					.path("api/files/download/")
					.path(String.valueOf(fileStored.getFileId()))
					.toUriString();
			
			responseFile = new ResponseFile(fileStored.getFileId(),fileStored.getName(),
					fileDownloadUri, fileStored.getType(),fileStored.getSizeInMB());
		} catch (IOException e) {
			LoggerFactoryUtil.writeErrorMessage(LOG,e);
		}
		
		return responseFile;
	}
	
	@PostMapping("/upload/all")
	public ResponseEntity<?> uploadFiles(@RequestParam("files") MultipartFile[] files){
		String message = "";
		if (files == null) {
			message = "You must select a file for uploading";
			return ResponseEntity.badRequest().body(new UploadResponseMessage(message));
		}
		
		List<ResponseFile> filesUploaded = Arrays.asList(files)
				.stream()
				.map(file -> uploadData(file))
				.collect(Collectors.toList());
		
		if(filesUploaded!=null && !filesUploaded.isEmpty()){
			message="Uploaded the files successfully! ";
			LoggerFactoryUtil.writeInfoMessage(LOG,message);
			return ResponseEntity.ok().body(filesUploaded);
		}else{
			message = "Could not upload the files!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new UploadResponseMessage(message));
		}
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getListOfAllFiles(){
		List<ResponseFile> allFiles = fileService.getAllFiles().map(
				fileLoaded ->{
					String fileDownloadUri = ServletUriComponentsBuilder
							.fromCurrentContextPath()
							.path(String.valueOf(fileLoaded.getFileId()))
							.path("/download/")
							.toUriString();
					return new ResponseFile(fileLoaded.getFileId(),fileLoaded.getName(),
							fileDownloadUri,fileLoaded.getType(),
							fileLoaded.getSizeInMB());
				}).collect(Collectors.toList());
		return ResponseEntity.ok().body(allFiles);
	}
	
	@GetMapping("/download/{fileId}")
	public ResponseEntity<?> downloadFile(@PathVariable String fileId){
		Long fileIdLng = Long.parseLong(fileId);
		File fileToDownLoad = fileService.getFile(fileIdLng);
		byte[] decompressedData = decompressBytes(fileToDownLoad.getData());
		fileToDownLoad.setData(decompressedData);
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileToDownLoad.getName() + "\"")
				.body(fileToDownLoad.getData());
	}
	
	public static byte[] compressBytes(byte[] dataToCompress){
		Deflater deflater = new Deflater();
		deflater.setInput(dataToCompress);
		deflater.finish();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(dataToCompress.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()){
			int count = deflater.deflate(buffer);
			outputStream.write(buffer,0,count);
		}
		try{
			outputStream.close();
		}catch (IOException ie){
		
		}
		LoggerFactoryUtil.writeInfoMessage(LOG,"Compressed file size -"+outputStream.toByteArray().length);
		return outputStream.toByteArray();
	}
	
	public static byte[] decompressBytes(byte[] dataToDecompress){
		Inflater inflater = new Inflater();
		inflater.setInput(dataToDecompress);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(dataToDecompress.length);
		byte[] buffer = new byte[1024];
		try{
			while(!inflater.finished()){
				int count = inflater.inflate(buffer);
				outputStream.write(buffer,0,count);
			}
			outputStream.close();
		}catch(IOException ie){
		
		}catch (DataFormatException de){
		
		}
		return outputStream.toByteArray();
	}
}

