package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import cdw.finalexam.motobikeshop.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements  IOrderService{
    @Autowired
    private IOrderRepository iOrderRepository;
    @Override
    public List<ProductOrder> findAll() {
        return iOrderRepository.findAll();
    }

    @Override
    public List<ProductOrder> findByPhone(String phone) {
        return iOrderRepository.findByPhone(phone);
    }

    @Override
    public ProductOrder save(ProductOrder order) {
        return iOrderRepository.save(order);
    }


}
