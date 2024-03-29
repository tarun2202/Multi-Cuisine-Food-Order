package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
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
@ToString(callSuper = true,exclude = {"order","dish"})
public class OrderItems extends BaseEntity {
	
	@Column(nullable = false)
	private double unitPrice;
	
	@Column(columnDefinition = "INT DEFAULT 1 ")
	private int quantity;
	
	@Column(nullable = false,columnDefinition = "FLOAT DEFAULT 0.0 ")
	private double discount;
	
	@Column(nullable = false,columnDefinition = "FLOAT DEFAULT 0.0 ")
	private double totalAmount;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id",nullable = false)
	private Orders order;
	
	@OneToOne
	@JoinColumn(name = "dish_id",referencedColumnName = "id")
	private Dish dish;
}
