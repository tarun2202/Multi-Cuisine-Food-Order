package com.app.dto;

import java.util.List;

import com.app.entities.OrderItems;

public class OrderItemsDTO {
	
	private String dishName;
	
	private double unitPrice;
	
	private int quantity;
	
	private String vendorName;

	public OrderItemsDTO(String dishName, double unitPrice, int quantity, String vendorName) {
		super();
		this.dishName = dishName;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
		this.vendorName = vendorName;
	}

	public String getDishName() {
		return dishName;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	
	
}
