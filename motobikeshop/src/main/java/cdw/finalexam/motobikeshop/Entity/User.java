package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
public class User {
    @Id
    private String userName;
    private String phoneNumber;
    private String password;
    private String email;
    private String address;
    private Date createdDate;
    private String permissions;
//    public Collection<Order> orders;
//    public Collection<CartItem> carts;

}
