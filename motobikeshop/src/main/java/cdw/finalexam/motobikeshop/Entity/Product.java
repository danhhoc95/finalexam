package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Product {
    @Id
    private int productId;
    private String name;
    private double price;
    private int quantity;
    private String thumbnail;
    private String detailImage;
    private String description;
    private int height;
    private String origin;
//    private Collection<OrderDetail> orderDetails;
//    private Collection<CartItem> carts
}
