package cdw.finalexam.motobikeshop.Entity.Payload;

import lombok.Data;

@Data
public class CardDetailPayload {
    private String description;
    private String detailImage;
    private int height;
    private String name;
    private String origin;
    private double price;
    private int productId;
    private int quantity;
    private String thumbnail;
}
