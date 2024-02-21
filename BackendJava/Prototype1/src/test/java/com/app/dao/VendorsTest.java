package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.app.entities.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class VendorsTest {

    private Vendors vendor;

    @BeforeEach
    public void setUp() {
        vendor = new Vendors();
        vendor.setVendorName("Vendor A");
        vendor.setVendorEmail("vendor@example.com");
        vendor.setVendorPassword("password");
        vendor.setVendorMobileNo("1234567890");
        vendor.setRatings(4);
        vendor.setUserRole(UserRole.ROLE_VENDOR);
        vendor.setVendorStatus(Status.PENDING);
    }

    @Test
    public void testVendorName() {
        assertEquals("Vendor A", vendor.getVendorName());
    }

    @Test
    public void testVendorEmail() {
        assertEquals("vendor@example.com", vendor.getVendorEmail());
    }

    @Test
    public void testVendorPassword() {
        assertEquals("password", vendor.getVendorPassword());
    }

    @Test
    public void testVendorMobileNo() {
        assertEquals("1234567890", vendor.getVendorMobileNo());
    }

    @Test
    public void testRatings() {
        assertEquals(4, vendor.getRatings());
    }

    @Test
    public void testUserRole() {
        assertEquals(UserRole.ROLE_VENDOR, vendor.getUserRole());
    }

    @Test
    public void testVendorStatus() {
        assertEquals(Status.PENDING, vendor.getVendorStatus());
    }

    @Test
    public void testDishesNotNull() {
        assertNotNull(vendor.getDishes());
    }

}
