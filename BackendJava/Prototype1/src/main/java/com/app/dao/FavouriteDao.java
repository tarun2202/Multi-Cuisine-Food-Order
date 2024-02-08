package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customers;
import com.app.entities.Favourites;

public interface FavouriteDao extends JpaRepository<Favourites, Long> {

	List<Favourites> getByCustomer(Customers customer);

	List<Favourites> getByCustomerId(Long customerId);

}
