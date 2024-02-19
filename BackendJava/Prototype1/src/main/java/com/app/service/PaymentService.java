package com.app.service;

import com.app.dto.ApiResponseDTO;
import com.app.entities.PaymentMethod;

public interface PaymentService {

	ApiResponseDTO addPaymentDetails(PaymentMethod paymentMethod, Long orderId);

}