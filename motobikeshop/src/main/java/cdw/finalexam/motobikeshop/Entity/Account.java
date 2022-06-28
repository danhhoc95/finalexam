package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
public class Account {
    @Id
    private String userName;
    private String password;
    private String email;
    private String phoneNumber;
    private String address;
    private Date createdDate;
    private String permissions;

}
