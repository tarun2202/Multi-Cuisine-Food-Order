package com.app.service;

import java.util.List;

import com.app.dto.DishDTO;

public interface VendorService {

	List<DishDTO> getAllDishesByVendor(String vendorName);

}
