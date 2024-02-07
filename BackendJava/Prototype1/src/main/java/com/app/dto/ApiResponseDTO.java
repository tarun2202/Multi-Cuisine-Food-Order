package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponseDTO {
	
	private LocalDateTime timeStamp;
	
	private String message;

	public ApiResponseDTO( String message) {
		super();
		this.timeStamp = LocalDateTime.now();
		this.message = message;
	}
	
	
	
	
}
