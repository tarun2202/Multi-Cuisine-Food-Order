package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class FavouritesTest {

    private Favourites favourites;

    @BeforeEach
    public void setUp() {
        favourites = new Favourites();
        favourites.setCustomer(mock(Customers.class));
        favourites.setDish(mock(Dish.class));
    }

    @Test
    public void testCustomerNotNull() {
        assertNotNull(favourites.getCustomer());
    }

    @Test
    public void testDishNotNull() {
        assertNotNull(favourites.getDish());
    }

}
