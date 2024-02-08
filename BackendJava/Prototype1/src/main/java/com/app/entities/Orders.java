package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true,exclude = "customer")
public class Orders extends BaseEntity {

	@Column(nullable = false,columnDefinition = "FLOAT DEFAULT 0.0 ")
	private double orderTotal;
	
	//check if the default value works in mysql
	@Column(nullable = false)
	private LocalDateTime orderTime;

	//add default value in constructor
	@Column(nullable = false)
	private LocalDateTime deliveryTime;
	
	@Enumerated(EnumType.STRING)
	@JoinColumn(columnDefinition = "VARCHAR(255) DEFAULT 'ORDERED' ")
	private Status orderStatus;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id",nullable = false)
	private Customers customer;

	public Orders(Long id, double orderTotal,LocalDateTime deliveryTime, Status orderStatus,
			Customers customer) {
		super(id);
		this.orderTotal = orderTotal;
		this.orderTime = LocalDateTime.now();
		this.deliveryTime = deliveryTime;
		this.orderStatus = orderStatus;
		this.customer = customer;
	}
	
	
	
}
