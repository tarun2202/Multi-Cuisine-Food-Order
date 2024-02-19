package com.app.service;

import java.util.List;

import com.app.dto.DishDTO;
import com.app.dto.LoginDTO;
import com.app.dto.DeliveryDTO;

public interface VendorService {

	List<DishDTO> getAllDishesByVendorId(Long vendorId);

	Long validateAndLogin(LoginDTO cred);

	DeliveryDTO delivery();

}
