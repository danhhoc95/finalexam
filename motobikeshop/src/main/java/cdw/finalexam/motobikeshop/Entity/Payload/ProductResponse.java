package cdw.finalexam.motobikeshop.Entity.Payload;

import cdw.finalexam.motobikeshop.Entity.Product;
import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    List<Product> list;
    int totalItem;
    int pageSize;
}
