package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class LoginResponseDTO {

	private String message;
	
	private Long customerId;

	public LoginResponseDTO(String message, Long customerId) {
		super();
		this.message = message;
		this.customerId = customerId;
	}

	public LoginResponseDTO() {
		super();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	
	
	
	
}
