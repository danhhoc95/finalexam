package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
public class CartId {
    private int productId;
    private String phone;
}
