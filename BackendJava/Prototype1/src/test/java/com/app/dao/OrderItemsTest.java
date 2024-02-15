package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class OrderItemsTest {

    private OrderItems orderItem;

    @BeforeEach
    public void setUp() {
        orderItem = new OrderItems();
        orderItem.setUnitPrice(10.0);
        orderItem.setQuantity(2);
        orderItem.setDiscount(1.0);
        orderItem.setTotalAmount(19.0); // Assuming a simple calculation for total amount
        orderItem.setOrder(mock(Orders.class));
        orderItem.setDish(mock(Dish.class));
    }

    @Test
    public void testUnitPrice() {
        assertEquals(10.0, orderItem.getUnitPrice());
    }

    @Test
    public void testQuantity() {
        assertEquals(2, orderItem.getQuantity());
    }

    @Test
    public void testDiscount() {
        assertEquals(1.0, orderItem.getDiscount());
    }

    @Test
    public void testTotalAmount() {
        assertEquals(19.0, orderItem.getTotalAmount());
    }

    @Test
    public void testOrderNotNull() {
        assertNotNull(orderItem.getOrder());
    }

    @Test
    public void testDishNotNull() {
        assertNotNull(orderItem.getDish());
    }

}
