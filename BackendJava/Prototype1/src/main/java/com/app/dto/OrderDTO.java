package com.app.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;

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
	
	private LocalDateTime orderTime;

	@Future
	private LocalDateTime deliveryTime;
	
	private Status orderStatus;

	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;

}