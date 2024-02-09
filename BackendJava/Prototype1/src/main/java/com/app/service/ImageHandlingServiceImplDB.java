package com.app.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.CustomerDao;
import com.app.dto.ApiResponseDTO;
import com.app.entities.Customers;

@Service("image_db")
@Transactional
public class ImageHandlingServiceImplDB implements ImageHandlingService {

	@Autowired
	private CustomerDao customerDao;

	@Override
	public ApiResponseDTO uploadImage(Long customerId, MultipartFile image) throws IOException {
		// get customer from customer id

		Customers customer = customerDao.findById(customerId).orElseThrow();

		// customer found --> PERSISTENT
		// to store the img directly in DB as a BLOB
		customer.setImage(image.getBytes());
		return new ApiResponseDTO("Image file uploaded successfully for emp id " + customerId);
	}

	@Override
	public byte[] downloadImage(Long customerId) throws IOException {
		// get customer by id
		Customers customer = customerDao.findById(customerId).orElseThrow();
		// customer found --> PERSISTENT
		return customer.getImage();
	}

}
