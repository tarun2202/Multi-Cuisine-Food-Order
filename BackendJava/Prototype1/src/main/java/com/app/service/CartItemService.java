package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDTO;
import com.app.dto.CartItemDTO;
import com.app.dto.CartItemResponseDTO;

public interface CartItemService {

	ApiResponseDTO addCartItem(Long customerId, Long dishId, CartItemDTO cartItemDetails);

	List<CartItemResponseDTO> getCartItem(Long customerId);
	
	ApiResponseDTO increaseQuantity(Long cartItemId);
	
	ApiResponseDTO decreaseQuantity(Long cartItemId);

    ApiResponseDTO deleteCartItem(Long customerId);
}
