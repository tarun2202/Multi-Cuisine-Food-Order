package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.VendorDao;
import com.app.dto.DishDTO;
import com.app.entities.Dish;
import com.app.entities.Vendors;

@Service
@Transactional
public class VendorServiceImpl implements VendorService {

	@Autowired
	private VendorDao vendorDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<DishDTO> getAllDishesByVendor(String vendorName) {
		Vendors vendor = vendorDao.getByVendorName(vendorName);

		List<Dish> dishes = vendor.getDishes();

		return dishes.stream().map(dish -> mapper.map(dish, DishDTO.class)).collect(Collectors.toList());
	}

}
