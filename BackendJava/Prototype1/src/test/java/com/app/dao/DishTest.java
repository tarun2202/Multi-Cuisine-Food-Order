package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import com.app.entities.CuisineType;
import com.app.entities.FoodCategory;
import com.app.entities.Dish;
import com.app.entities.Vendors;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DishTest {

    private Dish dish;

    @BeforeEach
    public void setUp() {
        dish = new Dish();
        dish.setDishName("Chicken Curry");
        dish.setDescription("Delicious chicken curry");
        dish.setCategory(FoodCategory.NON_VEGETARIAN);
        dish.setCuisine(CuisineType.INDIAN);
        dish.setRating(5);
        dish.setPrice(10.0);
        dish.setDiscount(1.0);
        dish.setDishImage("chicken_curry.jpg");
        dish.setVendor(mock(Vendors.class));
    }

    @Test
    public void testDishName() {
        assertEquals("Chicken Curry", dish.getDishName());
    }

    @Test
    public void testDescription() {
        assertEquals("Delicious chicken curry", dish.getDescription());
    }

    @Test
    public void testCategory() {
        assertEquals(FoodCategory.NON_VEGETARIAN, dish.getCategory());
    }

    @Test
    public void testCuisine() {
        assertEquals(CuisineType.INDIAN, dish.getCuisine());
    }

    @Test
    public void testRating() {
        assertEquals(5, dish.getRating());
    }

    @Test
    public void testPrice() {
        assertEquals(10.0, dish.getPrice());
    }

    @Test
    public void testDiscount() {
        assertEquals(1.0, dish.getDiscount());
    }

    @Test
    public void testDishImage() {
        assertEquals("chicken_curry.jpg", dish.getDishImage());
    }

    @Test
    public void testVendorNotNull() {
        assertNotNull(dish.getVendor());
    }

}
