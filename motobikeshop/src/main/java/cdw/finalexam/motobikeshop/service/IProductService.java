package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();
    Optional<Product> findById(int id);
    Product save(Product product);
    void remove(int id);
    List<Product> getDetailsProductCustomer(int id);
    List<Product> GetDetailsProductAdmin( int id);
    List<Product> GetProductsByName(String name);
}
