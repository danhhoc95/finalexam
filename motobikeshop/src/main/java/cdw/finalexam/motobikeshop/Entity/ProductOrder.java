package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class ProductOrder {
    @Id
    private int orderId;
    private String phoneNumber;
    private String address;
    private Date createDate;
    private double totalMoney;
    private String orderStatus;
    private String paymentMethod;
}
