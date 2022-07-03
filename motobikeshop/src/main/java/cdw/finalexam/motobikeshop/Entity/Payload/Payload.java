package cdw.finalexam.motobikeshop.Entity.Payload;

import cdw.finalexam.motobikeshop.Entity.Product;
import lombok.Data;

import java.util.List;

@Data
public class Payload<T> {
    private List<T> list;
    private int totalItem;
    private int pageSize;
}
