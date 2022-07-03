package cdw.finalexam.motobikeshop.Entity.Payload;

import cdw.finalexam.motobikeshop.Entity.Product;
import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import lombok.Data;

import java.util.List;

@Data
public class OrderResponse {
    List<ProductOrder> list;
    int totalItem;
    int pageSize;
}
