package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import java.time.LocalDateTime;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class OrdersTest {

    private Orders order;

    @BeforeEach
    public void setUp() {
        LocalDateTime deliveryTime = LocalDateTime.now().plusHours(2); // Assuming delivery time is 2 hours from now
        order = new Orders(1L, 50.0, deliveryTime, Status.ORDERED, mock(Customers.class));
    }

    @Test
    public void testOrderTotal() {
        assertEquals(50.0, order.getOrderTotal());
    }

    @Test
    public void testOrderTimeNotNull() {
        assertNotNull(order.getOrderTime());
    }

    @Test
    public void testOrderStatus() {
        assertEquals(Status.ORDERED, order.getOrderStatus());
    }

    @Test
    public void testCustomerNotNull() {
        assertNotNull(order.getCustomer());
    }

}
