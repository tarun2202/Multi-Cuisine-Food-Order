package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.DishDao;
import com.app.dao.FavouriteDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.FavouriteDTO;
import com.app.entities.Customers;
import com.app.entities.Dish;
import com.app.entities.Favourites;

@Service
@Transactional
public class FavouriteServiceImpl implements FavouriteService {

	@Autowired
	private FavouriteDao favouriteDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private DishDao dishDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDTO addFavourite(Long customerId, Long dishId) {

		Customers customer = customerDao.getReferenceById(customerId);

		Dish dish = dishDao.getReferenceById(dishId);

		Favourites favourite = new Favourites();
		favourite.setCustomer(customer);
		favourite.setDish(dish);
		favouriteDao.save(favourite);

		return new ApiResponseDTO("Favourite added succesfully!");
	}

	@Override
	public ApiResponseDTO removeFavourite(Long favouriteId) {

		Favourites favourite = favouriteDao.getReferenceById(favouriteId);
		favourite.setCustomer(null);
		favourite.setDish(null);
		favouriteDao.delete(favourite);

		return new ApiResponseDTO("Favourite removed!");
	}

	@Override
	public List<FavouriteDTO> getAllFavouritesByCustomerId(Long customerId) {
		
		//below approach is firing 4 hibernate queries,need to find efficient aproach by using join or maybe native query
		//Customers customer = customerDao.getReferenceById(customerId);

		List<Favourites> favourites = favouriteDao.getByCustomerId(customerId);

		return favourites.stream().map(fav -> mapper.map(fav, FavouriteDTO.class)).collect(Collectors.toList());
	}

}
