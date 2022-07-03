package cdw.finalexam.motobikeshop.Entity.Payload;

import cdw.finalexam.motobikeshop.Entity.Product;
import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import lombok.Data;

import java.util.List;

@Data
public class OrderResponse {
    private List<ProductOrder> list;
    private int totalItem;
    private int pageSize;
}
