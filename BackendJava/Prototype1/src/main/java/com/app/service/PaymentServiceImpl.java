package com.app.service;

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

	@Override
	public ApiResponseDTO addPaymentDetails(PaymentMethod paymentMethod, Long orderId) {

		Orders order = orderDao.getReferenceById(orderId);

		Payment payment = new Payment();

		payment.setOrder(order);
		payment.setPaymentMethod(paymentMethod);

		paymentDao.save(payment);

		return new ApiResponseDTO("Payment succesfull!");
	}

}
