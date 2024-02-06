package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true,exclude = {"image","customerPassword"})
public class Customers extends BaseEntity {
	
	@Column(nullable = false,length = 50)
	private String customerName;

	@Column(unique = true,nullable = false,length = 50)
	private String customerEmail;
	
	@Column(nullable = false,length = 255)
	private String customerPassword;
	
	@Column(unique = true,nullable = false,length = 10)
	private String customerMobileNo;
	
	@Column(nullable = false,columnDefinition = "VARCHAR(255) DEFAULT 'https://cdn-icons-png.flaticon.com/128/149/149071.png' ")
	private String image;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false,columnDefinition = "VARCHAR(25) DEFAULT 'ACTIVE' ")
	private Status customerStatus;
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Orders> orderList = new ArrayList<Orders>();
	
	//add helper methods to add and remove orders.
}
