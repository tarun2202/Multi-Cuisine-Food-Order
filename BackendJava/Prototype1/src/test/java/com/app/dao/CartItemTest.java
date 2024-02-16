package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

import com.app.entities.CartItem;
import com.app.entities.Customers;
import com.app.entities.Dish;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CartItemTest {

    private CartItem cartItem;

    @BeforeEach
    public void setUp() {
        cartItem = new CartItem();
        cartItem.setUnitPrice(10.0);
        cartItem.setQuantity(2);
        cartItem.setDiscount(1.0);
        cartItem.setTotalAmount(19.0); // Assuming a simple calculation for total amount
        cartItem.setCustomer(mock(Customers.class));
        cartItem.setDish(mock(Dish.class));
    }

    @Test
    public void testUnitPrice() {
        assertEquals(10.0, cartItem.getUnitPrice());
    }

    @Test
    public void testQuantity() {
        assertEquals(2, cartItem.getQuantity());
    }

    @Test
    public void testDiscount() {
        assertEquals(1.0, cartItem.getDiscount());
    }

    @Test
    public void testTotalAmount() {
        assertEquals(19.0, cartItem.getTotalAmount());
    }

    @Test
    public void testCustomerNotNull() {
        Assertions.assertNotNull(cartItem.getCustomer());
    }

    @Test
    public void testDishNotNull() {
        Assertions.assertNotNull(cartItem.getDish());
    }

}

