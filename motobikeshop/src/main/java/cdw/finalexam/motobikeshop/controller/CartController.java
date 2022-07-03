package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.CartItem;
import cdw.finalexam.motobikeshop.Entity.Payload.OrderResponse;
import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.service.ICartService;
import cdw.finalexam.motobikeshop.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class CartController {

    @Autowired
    private ICartService iCartService;

    @GetMapping(value = { "/carts"})
    public List<CartItem> getAllCart() {
        List<CartItem> carts = iCartService.findAll();
        return carts;
    }

    @GetMapping(value = { "/cart/{phone}"})
    public List<CartItem> get(@PathVariable String phone) {
        return iCartService.findByPhone(phone);
    }

}
