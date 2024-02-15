package com.app.dao;

//public class AdminDaoTest {
//}

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.app.dao.AdminDao;
import com.app.entities.Admin;

@SpringBootTest
public class AdminDaoTest {

    @MockBean
    private AdminDao adminDao;

    @Test
    public void testFindByAdminEmail() {
        // Mocking the behavior of the AdminDao
        String email = "admin@example.com";
        Admin admin = new Admin();
        admin.setAdminEmail(email);
        when(adminDao.findByAdminEmail(email)).thenReturn(Optional.of(admin));

        // Testing the method
        Optional<Admin> optionalAdmin = adminDao.findByAdminEmail(email);
        assertEquals(true, optionalAdmin.isPresent());
        assertEquals(email, optionalAdmin.get().getAdminEmail());
    }
}
