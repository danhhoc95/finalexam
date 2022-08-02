package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.Payload.Payload;
import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.repository.ICartRepository;
import cdw.finalexam.motobikeshop.service.ICartService;
import cdw.finalexam.motobikeshop.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("api")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private ICartService iCartService;

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

    @GetMapping(value = { "/orders/{phone}"})
    public Payload<ProductOrder> getAllOrderByPhone(@PathVariable String phone) {
        List<ProductOrder> orders = orderService.findByPhone(phone);
        Payload<ProductOrder> response = new Payload<ProductOrder>();
        response.setList(orders);
        response.setPageSize(6);
        response.setTotalItem(orders.size());
        return response;
    }

    @PostMapping(value = { "/order/add"})
    public ProductOrder createOrder(@RequestBody ProductOrder order) {
        return orderService.save(order);
    }

    @PostMapping(value = {"/acceptPurchase"})
    public String accecpPurchase(@RequestBody String phone)
    {
        Random rnd = new Random();
        int orderIDrd = rnd.nextInt(8);
        var cart = iCartService.findByPhone(phone);
        return "" + orderIDrd;
    }
}
