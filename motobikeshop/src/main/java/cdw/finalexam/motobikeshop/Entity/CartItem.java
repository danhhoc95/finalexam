package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
@Data
public class CartItem {

    @Id
    private int cartId;
    private int productId;
    private String phone;
    private int quantity;
    private List<Product> products;
}
