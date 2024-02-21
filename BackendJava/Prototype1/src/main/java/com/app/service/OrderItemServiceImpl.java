package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.OrderDao;
import com.app.dao.OrderItemDao;
import com.app.dao.VendorDao;
import com.app.dto.OrderItemsDTO;
import com.app.entities.Customers;
import com.app.entities.Dish;
import com.app.entities.OrderItems;
import com.app.entities.Orders;
import com.app.entities.Vendors;

@Service
@Transactional
public class OrderItemServiceImpl implements OrderItemService {
             
     	@Autowired
     	private OrderDao orderDao;
     	
     	@Autowired
     	private OrderItemDao orderItemDao;
     	
     	@Autowired
     	private VendorDao vendorDao;
     	
     	@Autowired
     	private CustomerDao customerDao;
     	
     	
     	
     	
     	public List<OrderItemsDTO> getOrderItems(Long customerId){
     		
     		Customers customer = customerDao.findById(customerId).orElse(null);
     		
     		List<OrderItemsDTO> orderList = new ArrayList<OrderItemsDTO>();

     		
     		List<Orders> oList = orderDao.findByCustomer(customer);
     		
     		for (Orders order : oList) {
				
     		List<OrderItems> orderItemsList = orderItemDao.getByOrder(order);
     		
     		     		
     		for (OrderItems orderItem : orderItemsList) {
				  
     			Dish dish = orderItem.getDish();
     			
     			Vendors vendor = vendorDao.findById(dish.getVendor().getId()).orElse(null);
     			
     			int quantity = orderItem.getQuantity();
     			
     			String vendorName = vendor.getVendorName();
     					
     		    String dishName = dish.getDishName();
     			
     			double unitPrice = dish.getPrice();
     			
     			OrderItemsDTO item = new OrderItemsDTO(dishName, unitPrice, quantity, vendorName);
     			
     			orderList.add(item);
			}
     		}
     		
     		
     		return orderList;
     		
     	}
	
}
