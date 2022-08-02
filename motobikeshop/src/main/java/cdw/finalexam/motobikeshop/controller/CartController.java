package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.CartItem;
import cdw.finalexam.motobikeshop.Entity.Payload.CardDetailPayload;
import cdw.finalexam.motobikeshop.Entity.Payload.CardPayload;
import cdw.finalexam.motobikeshop.service.ICartService;
import cdw.finalexam.motobikeshop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class CartController {

    @Autowired
    private ICartService iCartService;

    @Autowired
    private IProductService iProductService;

    @GetMapping(value = { "/carts"})
    public List<CartItem> getAllCart() {
        List<CartItem> carts = iCartService.findAll();
        return carts;
    }

    @GetMapping(value = { "/cart/{phone}"})
    public List<CardDetailPayload> get(@PathVariable String phone)
    {
        List<CardDetailPayload> response = new ArrayList<>();
        var cardItems = iCartService.findByPhone(phone);
        for (var i: cardItems) {
            var product = iProductService.findById(i.getProductId());
            var cardPayload = new CardDetailPayload();
            cardPayload.setDescription(product.get().getDescription());
            cardPayload.setDetailImage(product.get().getDetailImage());
            cardPayload.setHeight(product.get().getHeight());
            cardPayload.setName(product.get().getName());
            cardPayload.setOrigin(product.get().getOrigin());
            cardPayload.setPrice(product.get().getPrice());
            cardPayload.setProductId(product.get().getProductId());
            cardPayload.setQuantity(i.getQuantity());
            cardPayload.setThumbnail(product.get().getThumbnail());
            response.add(cardPayload);
        }
        return response;
    }

    @GetMapping(value = { "/cart/count/{phone}"})
    public CardPayload getTotal(@PathVariable String phone) {
        var totalMoney = 0;
        CardPayload response = new CardPayload();
        var cartItems = iCartService.findByPhone(phone);
        response.setCount(cartItems.size());
        // sum là tính tổng tiền
        for (var i: cartItems) {
            var product = iProductService.findById(i.getProductId());
            totalMoney += product.get().getPrice() * i.getQuantity();
        }
        response.setSum(totalMoney);
        return response;
    }

    @PostMapping(value = { "/cart/plus/{phone}"})
    public CardPayload addTotal(@PathVariable("phone") String phone, @RequestBody String productid) {
        var totalMoney = 0;
        CardPayload response = new CardPayload();
        var cartItems = iCartService.findByPhone(phone);
        response.setCount(cartItems.size());
        // sum là tính tổng tiền
        for (var i: cartItems) {
            if(i.getProductId()==Integer.parseInt(productid)) {
                i.setQuantity(i.getQuantity() + 1);
                iCartService.save(i);
                var product = iProductService.findById(i.getProductId());
                totalMoney += product.get().getPrice() * (i.getQuantity() + 1);
            }
        }
        response.setSum(totalMoney);
        return response;
    }

    @PostMapping(value = { "/cart/sub/{phone}"})
    public CardPayload subTotal(@PathVariable("phone") String phone, @RequestBody String productid) {
        var totalMoney = 0;
        CardPayload response = new CardPayload();
        var cartItems = iCartService.findByPhone(phone);
        response.setCount(cartItems.size());
        // sum là tính tổng tiền
        for (var i: cartItems) {
            if(i.getProductId()==Integer.parseInt(productid)) {
                i.setQuantity(i.getQuantity() > 0 ? i.getQuantity() - 1 : 0);
                iCartService.save(i);
                var product = iProductService.findById(i.getProductId());
                totalMoney += product.get().getPrice() * (i.getQuantity() > 0 ? i.getQuantity() - 1 : 0);
            }
        }
        response.setSum(totalMoney);
        return response;
    }

    @PostMapping("cart/add")
    public CartItem createCart(@RequestBody CartItem cartItem){
        return iCartService.save(cartItem);
    }

    @PostMapping("cart/remove")
    public void removeCart(@RequestBody CartItem cartItem){
         iCartService.remove(cartItem);
    }

    @PostMapping("cart/remove/{phone}")
    public List<CardDetailPayload> removeCartItem(@PathVariable("phone") String phone, @RequestBody String productid)
    {
        List<CardDetailPayload> response = new ArrayList<>();
        var cardItems = iCartService.findByPhone(phone);
        for (var i: cardItems) {
            if(i.getProductId()== Integer.parseInt(productid)){
                cardItems.remove(i);
                iCartService.remove(i);
            }
        }
        var cardItems2 = iCartService.findByPhone(phone);
        return response;
    }
}
