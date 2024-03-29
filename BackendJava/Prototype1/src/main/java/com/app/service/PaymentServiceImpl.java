package com.app.service;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderDao;
import com.app.dao.PaymentDao;
import com.app.dto.ApiResponseDTO;
import com.app.entities.Orders;
import com.app.entities.Payment;
import com.app.entities.PaymentMethod;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentDao paymentDao;

	@Autowired
	private OrderDao orderDao;
	
	private static SecureRandom secureRandom = new SecureRandom();

	@Override
	public ApiResponseDTO addPaymentDetails(PaymentMethod paymentMethod, Long orderId) {
		
		
		  final String CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		        StringBuilder stringBuilder = new StringBuilder();
		        for (int i = 0; i < 10; i++) {
		            int randomIndex = secureRandom.nextInt(CHARACTERS.length());
		            char randomChar = CHARACTERS.charAt(randomIndex);
		            stringBuilder.append(randomChar);
		        }
		        String transId=stringBuilder.toString();

		Orders order = orderDao.getReferenceById(orderId);

		Payment payment = new Payment();

		payment.setOrder(order);
		payment.setPaymentMethod(paymentMethod);
		payment.setTransactionId(transId);

		paymentDao.save(payment);

		return new ApiResponseDTO("Payment succesfull!");
	}

}