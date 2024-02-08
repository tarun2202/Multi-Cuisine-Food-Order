package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.DishDao;
import com.app.dao.ReviewDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.ReviewDTO;
import com.app.entities.Customers;
import com.app.entities.Dish;
import com.app.entities.Review;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewDao reviewDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private DishDao dishDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDTO addReview(Long customerId, Long dishId, ReviewDTO reviewDetails) {

		Customers customer = customerDao.getReferenceById(customerId);

		Dish dish = dishDao.getReferenceById(dishId);

		Review review = mapper.map(reviewDetails, Review.class);
		review.setCustomer(customer);
		review.setDish(dish);
		reviewDao.save(review);

		return new ApiResponseDTO("Review added succesfully!");
	}

	//4 queries fired
	@Override
	public List<ReviewDTO> getAllReviews() {
		List<Review> reviews = reviewDao.findAll();
		return reviews.stream().map(rev -> mapper.map(rev, ReviewDTO.class)).collect(Collectors.toList());
	}

	//3 queries fired
	@Override
	public List<ReviewDTO> getAllReviewsOfCustomer(Long customerId) {

		Customers customer = customerDao.getReferenceById(customerId);

		List<Review> reviews = reviewDao.getByCustomer(customer);

		return reviews.stream().map(rev -> mapper.map(rev, ReviewDTO.class)).collect(Collectors.toList());
	}

	//4 queries fired
	@Override
	public List<ReviewDTO> getReviewByDish(Long dishId) {

		Dish dish = dishDao.getReferenceById(dishId);

		List<Review> reviews = reviewDao.getByDish(dish);

		return reviews.stream().map(rev -> mapper.map(rev, ReviewDTO.class)).collect(Collectors.toList());
	}

}