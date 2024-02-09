package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@ToString(callSuper = true,exclude = {"customer","vendor"})
public class Address extends BaseEntity{

	@Column(nullable = false,length = 100)
	private String street;
	
	@Column(nullable = false,length = 25)
	private String city;
	
	@Column(nullable = false,length = 25)
	private String state;
	
	@Column(nullable = false,columnDefinition = "VARCHAR(25) DEFAULT 'INDIA'")
	private String country;
	
	@Column(nullable = false,length = 6)
	private String pincode;
	
	@ManyToOne
	@JoinColumn(name = "customer_id"/* ,columnDefinition = "INT DEFAULT 0 " */,nullable = false)
	private Customers customer;

	@ManyToOne
	@JoinColumn(name = "vendor_id", /* columnDefinition = "INT DEFAULT 0 ", */nullable = false)	
	private Vendors vendor;
	
	
}
