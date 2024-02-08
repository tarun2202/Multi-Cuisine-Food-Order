package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customers;
import com.app.entities.Dish;
import com.app.entities.Review;

public interface ReviewDao extends JpaRepository<Review, Long> {

	List<Review> getByCustomer(Customers customer);

	List<Review> getByDish(Dish dish);

}
