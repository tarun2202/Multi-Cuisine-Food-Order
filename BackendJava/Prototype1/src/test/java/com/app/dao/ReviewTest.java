package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ReviewTest {

    private Review review;

    @BeforeEach
    public void setUp() {
        review = new Review();
        review.setFeedback("This dish was delicious!");
        review.setCustomer(mock(Customers.class));
        review.setDish(mock(Dish.class));
    }

    @Test
    public void testFeedback() {
        assertEquals("This dish was delicious!", review.getFeedback());
    }

    @Test
    public void testCustomerNotNull() {
        assertNotNull(review.getCustomer());
    }

    @Test
    public void testDishNotNull() {
        assertNotNull(review.getDish());
    }

}
