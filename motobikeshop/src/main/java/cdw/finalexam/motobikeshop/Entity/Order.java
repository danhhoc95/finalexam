package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Order {
    @Id
    private int orderId;
}
