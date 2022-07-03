package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Product;
import cdw.finalexam.motobikeshop.Entity.Store;
import cdw.finalexam.motobikeshop.repository.IProductRepository;
import cdw.finalexam.motobikeshop.repository.IStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements  IProductService{
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public Optional<Product> findById(int id) {
        return iProductRepository.findById(id);
    }

    @Override
    public Product save(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public void remove(int id) {
        iProductRepository.deleteById(id);
    }

    @Override
    public List<Product> getDetailsProductCustomer(int id) {
        return null;
    }

    @Override
    public List<Product> GetDetailsProductAdmin(int id) {
        return null;
    }

    @Override
    public List<Product> GetProductsByName(String name) {
        return iProductRepository.GetProductsByName(name);
    }

    @Override
    public List<Product> filterData(int minPrice, int maxPrice, int minHeight, int maxHeight, String origin) {
        return iProductRepository.filterData(minPrice,maxPrice,minHeight,maxHeight,origin);
    }
}
