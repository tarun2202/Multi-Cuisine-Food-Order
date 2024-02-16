package com.app.dao;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

import com.app.entities.Customers;
import com.app.entities.Status;
import com.app.entities.Orders;
import com.app.entities.UserRole;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CustomersTest {

    private Customers customers;

    @BeforeEach
    public void setUp() {
        customers = new Customers();
        customers.setCustomerName("John Doe");
        customers.setCustomerEmail("john.doe@example.com");
        customers.setCustomerPassword("password");
        customers.setCustomerMobileNo("1234567890");
        customers.setUserRole(UserRole.ROLE_CUSTOMER);
        customers.setCustomerStatus(Status.ACTIVE);
        customers.setImage(new byte[0]); // Assuming an empty byte array for the image
    }

    @Test
    public void testCustomerName() {
        assertEquals("John Doe", customers.getCustomerName());
    }

    @Test
    public void testCustomerEmail() {
        assertEquals("john.doe@example.com", customers.getCustomerEmail());
    }

    @Test
    public void testCustomerPassword() {
        assertEquals("password", customers.getCustomerPassword());
    }

    @Test
    public void testCustomerMobileNo() {
        assertEquals("1234567890", customers.getCustomerMobileNo());
    }

    @Test
    public void testUserRole() {
        assertEquals(UserRole.ROLE_CUSTOMER, customers.getUserRole());
    }

    @Test
    public void testCustomerStatus() {
        assertEquals(Status.ACTIVE, customers.getCustomerStatus());
    }

    @Test
    public void testImageNotNull() {
        assertNotNull(customers.getImage());
    }

    @Test
    public void testOrderListNotNull() {
        assertNotNull(customers.getOrderList());
    }

    @Test
    public void testRemoveOrder() {
        Orders order = mock(Orders.class);
        customers.addOrder(order);
        customers.removeOrder(order);
        assertEquals(0, customers.getOrderList().size());
        assertNull(order.getCustomer());
    }

}
