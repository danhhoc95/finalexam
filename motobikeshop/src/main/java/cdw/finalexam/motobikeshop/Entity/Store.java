package cdw.finalexam.motobikeshop.Entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Store {
    @Id
    private int storeId;
    private String storeName;
    private String address;
    private String city;
    private String district;
    private String hotLine;
    private String images;
    private String openTime;
    private String closeTime;
    private String latitude;
    private String longitude;
    private int outstanding;

}
