package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Motobike {
    @Id
    private String motorId;
}
