package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Dish;

public interface DishDao extends JpaRepository<Dish, Long> {

	List<Dish> findByDishName(String dishName);

}
