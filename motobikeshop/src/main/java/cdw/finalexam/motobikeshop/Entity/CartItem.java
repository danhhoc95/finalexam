package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class CartItem {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator="my_CartItem_seq_gen")
    @SequenceGenerator(name="my_CartItem_seq_gen", sequenceName="MY_CARTITEM_SEQ")
    private int cartId;
    private int productId;
    private String phone;
    private int quantity;

}
