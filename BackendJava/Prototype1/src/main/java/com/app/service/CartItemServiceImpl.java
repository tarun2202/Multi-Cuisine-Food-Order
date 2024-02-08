package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartItemDao;
import com.app.dao.CustomerDao;
import com.app.dao.DishDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.CartItemDTO;
import com.app.entities.CartItem;
import com.app.entities.Customers;
import com.app.entities.Dish;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemDao cartItemDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private DishDao dishDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDTO addCartItem(Long customerId, Long dishId,CartItemDTO cartItemDetails) {

		Customers customer = customerDao.getReferenceById(customerId);

		Dish dish = dishDao.getReferenceById(dishId);

		CartItem cartItem = mapper.map(cartItemDetails, CartItem.class);
		cartItem.setCustomer(customer);
		cartItem.setDish(dish);
		cartItemDao.save(cartItem);

		return new ApiResponseDTO("Cart item added!");
	}

}
