package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PaymentTest {

    private Payment payment;

    @BeforeEach
    public void setUp() {
        payment = new Payment();
        payment.setPaymentMethod(PaymentMethod.CREDIT_CARD);
        payment.setTransactionId("1234567890");
        payment.setOrder(mock(Orders.class));
    }

    @Test
    public void testPaymentMethod() {
        assertEquals(PaymentMethod.CREDIT_CARD, payment.getPaymentMethod());
    }

    @Test
    public void testTransactionId() {
        assertEquals("1234567890", payment.getTransactionId());
    }

    @Test
    public void testOrderNotNull() {
        assertNotNull(payment.getOrder());
    }

    @Test
    public void testTransactionIdGeneration() {
        Payment newPayment = new Payment();
        assertNotNull(newPayment.getTransactionId());
    }

}
