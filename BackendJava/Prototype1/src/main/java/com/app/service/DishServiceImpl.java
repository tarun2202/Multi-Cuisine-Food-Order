package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DishDao;
import com.app.dao.VendorDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.DishDTO;
import com.app.entities.Dish;
import com.app.entities.Vendors;

@Service
@Transactional
public class DishServiceImpl implements DishService {

	@Autowired
	private DishDao dishDao;

	@Autowired
	private VendorDao vendorDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<DishDTO> getAllDishes() {
		List<Dish> dishes = dishDao.findAll();

		List<DishDTO> dishDTO = dishes.stream().map(dish -> mapper.map(dish, DishDTO.class))
				.collect(Collectors.toList());

		return dishDTO;
	}

	@Override
	public List<DishDTO> getAllDishesByName(String dishName) {

		List<Dish> dishes = dishDao.findByDishName(dishName);

		List<DishDTO> dishDTO = dishes.stream().map(dish -> mapper.map(dish, DishDTO.class))
				.collect(Collectors.toList());

		return dishDTO;
	}

	@Override
	public ApiResponseDTO addDishDetails(Long vendorId, DishDTO dish) {
		Dish dishEnt = mapper.map(dish, Dish.class);
		// getReferenceById returns proxy which reduces the select query fired by
		// hibernate
		Vendors vendor = vendorDao.getReferenceById(vendorId);
		dishEnt.setVendor(vendor);
		dishDao.save(dishEnt);

		return new ApiResponseDTO("Dish added succesfully!");
	}

	@Override
	public ApiResponseDTO deleteDishDetails(Long dishId, String vendorName) {
		//3 queries fired by hibernate
		Vendors vendor = vendorDao.getByVendorName(vendorName);

		Dish dish = dishDao.getReferenceById(dishId);

		vendor.removeDish(dish);

		//2 queries fired by hibernate but any vendor can delete any dish(other vendors dish) by id
		//dishDao.deleteById(dishId);
		
		return new ApiResponseDTO("Deletion succesfull!");
	}

}
