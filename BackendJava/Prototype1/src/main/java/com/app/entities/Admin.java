package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true,exclude = {"adminPassword"})
public class Admin extends BaseEntity {
	
	@Column(nullable = false,unique = true)
	private String adminEmail;
	
	@Column(nullable = false)
	private String adminPassword;
	
	@Enumerated(EnumType.STRING)
	private UserRole userRole;
	
}
