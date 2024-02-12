import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class AddressTest {

    @Test
    public void testAddressEntity() {
        // Create a sample customer and vendor
        Customer customer = new Customer();
        customer.setId(1L);
        Vendor vendor = new Vendor();
        vendor.setId(1L);

        // Create an address
        Address address = new Address();
        address.setId(1L);
        address.setStreet("123, Maharaja Shivaji Road");
        address.setCity("Pune");
        address.setState("Maharasthra");
        address.setCountry("India");
        address.setPincode("442011");
        address.setCustomer(customer);
        address.setVendor(vendor);

        // Verify the fields
        assertEquals(1L, address.getId());
        assertEquals("123, Maharaja Shivaji Road", address.getStreet());
        assertEquals("Pune", address.getCity());
        assertEquals("Maharasthra", address.getState());
        assertEquals("India", address.getCountry());
        assertEquals("442011", address.getPincode());

        // Verify the associations
        assertNotNull(address.getCustomer());
        assertEquals(1L, address.getCustomer().getId());
        assertNotNull(address.getVendor());
        assertEquals(1L, address.getVendor().getId());
    }
}
