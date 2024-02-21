package com.app.dto;

import lombok.ToString;

@ToString
public class AdminDashboardDTO {

	int vendorCount;
	int customerCount;
	int dishCount;
	double revenue;
	int orderCount;
	public int getVendorCount() {
		return vendorCount;
	}
	public void setVendorCount(int vendorCount) {
		this.vendorCount = vendorCount;
	}
	public int getCustomerCount() {
		return customerCount;
	}
	public void setCustomerCount(int customerCount) {
		this.customerCount = customerCount;
	}
	public int getDishCount() {
		return dishCount;
	}
	public void setDishCount(int dishCount) {
		this.dishCount = dishCount;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	public int getOrderCount() {
		return orderCount;
	}
	public void setOrderCount(int orderCount) {
		this.orderCount = orderCount;
	}
	
	
}