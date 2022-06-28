package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
@Data
public class Manufactories {

    @Id
    private int manuId;
    private String name;
    private String established;
    private String headquarters;
    private String website;
    private String logo;
    private ArrayList<Motobike> motorList;
}
