package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDTO;
import com.app.dto.ReviewDTO;

public interface ReviewService {

	ApiResponseDTO addReview(Long customerId, Long dishId, ReviewDTO reviewDetails);

	List<ReviewDTO> getAllReviews();

	List<ReviewDTO> getAllReviewsOfCustomer(Long customerId);

	List<ReviewDTO> getReviewByDish(Long dishId);

}
