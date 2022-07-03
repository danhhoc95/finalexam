package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.CartItem;

import java.util.List;

public interface ICartService {
    List<CartItem> findAll();
    List<CartItem> findByPhone(String phone);
    CartItem save (CartItem cart);
    void remove(CartItem cartItem);
}
