package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.Payload.ProductResponse;
import cdw.finalexam.motobikeshop.Entity.Product;
import cdw.finalexam.motobikeshop.Entity.SearchProduct;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.exception.NotFoundDataException;
import cdw.finalexam.motobikeshop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping(value = { "/products"})
    public ProductResponse getAllProducts() {
        List<Product> products = productService.findAll();
        ProductResponse response = new ProductResponse();
        response.setList(products);
        response.setTotalItem(products.size());
        response.setPageSize(6);
        return response;
    }

    @GetMapping(value = { "/product/{id}"})
    public Optional<Product> GetDetailById(@PathVariable("id") int id) {
        Optional<Product> product = productService.findById(id);
        if (product.isEmpty()) {
            throw new NotFoundDataException("Product is not exists");
        }
        return product;
    }
    @GetMapping(value = { "/product/detailsCustomer"})
    public List<Product> GetDetailsProductCustomer() {
        List<Product> products = productService.findAll();
        return products;
    }

    @GetMapping(value = { "/product/detailsAdmin"})
    public List<Product> GetDetailsProductAdmin() {
        List<Product> products = productService.findAll();
        return products;
    }

    @GetMapping(value = { "/product/search"})
    public List<Product> GetProductsByName(@RequestBody SearchProduct searchProduct) {
        String productName = searchProduct.getName();
        List<Product> products = productService.GetProductsByName(productName);
        return products;
    }

    @GetMapping(value = { "/product/filter"})
    public List<Product> filterProducts(@RequestBody SearchProduct searchProduct) {
        List<Product> products = productService.filterData(searchProduct.getMinPrice(), searchProduct.getMaxPrice(),
                searchProduct.getMinHeight(), searchProduct.getMaxHeight(),searchProduct.getOrigin());
        return products;
    }

    @PostMapping("/product/add")
    public Product createProduct(@RequestBody Product product){
        return productService.save(product);
    }

    @PostMapping("/product/update")
    public Product updateProduct(@RequestBody Product product){
        return productService.save(product);
    }

    @PostMapping("/product/delete")
    public void deleteProduct(@RequestBody Product product){
        productService.remove(product.getProductId());
    }

}
