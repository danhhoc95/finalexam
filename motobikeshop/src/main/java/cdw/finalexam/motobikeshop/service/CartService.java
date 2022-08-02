package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.CartId;
import cdw.finalexam.motobikeshop.Entity.CartItem;
import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import cdw.finalexam.motobikeshop.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements  ICartService{
    @Autowired
    private ICartRepository iCartRepository;
    @Override
    public List<CartItem> findAll() {
        return iCartRepository.findAll();
    }

    @Override
    public List<CartItem> findByPhone(String phone) {
        return iCartRepository.findByPhone(phone);
    }

    @Override
    public CartItem save(CartItem cart) {
        return iCartRepository.save(cart);
    }

    @Override
    public void remove(CartItem cartItem) {
        iCartRepository.delete(cartItem);
    }
}
