package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

@Data
public class SearchProduct {
    private String name;
    private int minPrice;
    private int maxPrice;
    private int minHeight;
    private int maxHeight;
    private String origin;
}
