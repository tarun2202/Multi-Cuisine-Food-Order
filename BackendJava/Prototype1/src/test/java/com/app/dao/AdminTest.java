package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.app.entities.Admin;
import com.app.entities.UserRole;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AdminTest {

    private Admin admin;

    @BeforeEach
    public void setUp() {
        admin = new Admin();
        admin.setAdminEmail("admin@example.com");
        admin.setAdminPassword("password");
        admin.setUserRole(UserRole.ROLE_ADMIN);
    }

    @Test
    public void testAdminEmail() {
        assertEquals("admin@example.com", admin.getAdminEmail());
    }

    @Test
    public void testAdminPassword() {
        assertEquals("password", admin.getAdminPassword());
    }

    @Test
    public void testUserRole() {
        assertEquals(UserRole.ROLE_ADMIN, admin.getUserRole());
    }

}

