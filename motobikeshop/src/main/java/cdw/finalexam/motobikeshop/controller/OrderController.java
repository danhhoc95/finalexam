package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @GetMapping(value = { "/orders"})
    public List<ProductOrder> getAllOrders() {
        List<ProductOrder> orders = orderService.findAll();
        return orders;
    }

    @GetMapping(value = { "/orders/phone"})
    public List<ProductOrder> getAllOrderByPhone(@RequestBody User user) {
        List<ProductOrder> orders = orderService.findByPhone(user.getPhoneNumber());
        return orders;
    }

    @PostMapping(value = { "/order/add"})
    public ProductOrder createOrder(@RequestBody ProductOrder order) {
        return orderService.save(order);
    }

}
