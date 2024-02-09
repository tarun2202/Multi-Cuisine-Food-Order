package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartItemDao;
import com.app.dao.CustomerDao;
import com.app.dao.OrderDao;
import com.app.dao.OrderItemDao;
import com.app.dto.ApiResponseDTO;
import com.app.entities.CartItem;
import com.app.entities.Customers;
import com.app.entities.OrderItems;

@Service
@Transactional
public class OrderItemServiceImpl implements OrderItemService {

	@Autowired
	private OrderItemDao orderItemDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private OrderDao orderDao;

	@Autowired
	private CartItemDao cartItemDao;

	@Override
	public ApiResponseDTO addOrderItems(Long customerId) {

		Customers customer = customerDao.getReferenceById(customerId);

		List<CartItem> cartItems = cartItemDao.getByCustomer(customer);

		//List<Orders> orders = customer.getOrderList();

		for (int i = 0; i < cartItems.size(); i++) {
			OrderItems orderItem = new OrderItems();
			orderItem.setDiscount(cartItems.get(i).getDiscount());
			orderItem.setDish(cartItems.get(i).getDish());
			orderItem.setQuantity(cartItems.get(i).getQuantity());
			orderItem.setUnitPrice(cartItems.get(i).getUnitPrice());
			orderItem.setTotalAmount(cartItems.get(i).getTotalAmount());
			// orderItem.setOrder(null);
			orderItemDao.save(orderItem);
		}

		return new ApiResponseDTO("Order items added!");
	}

}
