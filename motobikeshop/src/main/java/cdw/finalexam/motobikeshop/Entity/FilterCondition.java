package cdw.finalexam.motobikeshop.Entity;

import lombok.Data;

@Data
public class FilterCondition {
    public String origin ;
    public int sort ;
    public RangeDTO priceRange ;
    public RangeDTO heightRange ;
}

