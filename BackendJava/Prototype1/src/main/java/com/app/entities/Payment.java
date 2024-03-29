package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true,exclude = {"order"})
public class Payment extends BaseEntity {

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private PaymentMethod paymentMethod;
	
	//add random number generator for this field in constructor
	@Column(nullable = false,unique = true)
	private String transactionId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id",nullable = false)
	private Orders order;
	
	
}
