package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.ProductOrder;

import java.util.List;

public interface IOrderService {
    List<ProductOrder> findAll();
    List<ProductOrder> findByPhone(String phone);
    ProductOrder save (ProductOrder order);
}
