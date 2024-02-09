package com.app.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.Status;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotNull
	private double orderTotal;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime orderTime;

	@Future
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime deliveryTime;
	
	@NotBlank
	private Status orderStatus;

	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;

}
