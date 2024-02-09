package com.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.dto.ApiResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

	// resource not found exception handler
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ApiResponseDTO handleResourceNotFoundException(ResourceNotFoundException e) {
		return new ApiResponseDTO(e.getMessage());
	}

	// generic exception handler
	@ExceptionHandler(RuntimeException.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public ApiResponseDTO handleGenericException(RuntimeException e) {
		return new ApiResponseDTO(e.getMessage());
	}
}
