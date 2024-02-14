package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponseDTO;

public interface ImageHandlingService {

	byte[] downloadImage(Long customerId) throws IOException;

	ApiResponseDTO uploadImage(Long customerId, MultipartFile image) throws IOException;

}
