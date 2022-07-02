package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.Payload.ProductResponse;
import cdw.finalexam.motobikeshop.Entity.Product;
import cdw.finalexam.motobikeshop.Entity.SearchProduct;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.exception.NotFoundDataException;
import cdw.finalexam.motobikeshop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("api")
public class ProductController {

    int PAGE_SIZE = 6;
    @Autowired
    private IProductService productService;

    @GetMapping(value = { "/products"})
    public ProductResponse getAllProducts() {
        List<Product> products = productService.findAll();
        ProductResponse response = new ProductResponse();
        response.setList(products);
        response.setPageSize(PAGE_SIZE);
        response.setTotalItem(products.size());
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

    @GetMapping(params = {"page"}, value = {"/search"})
    public List<Product>  Search(@RequestParam("page") int page, String keyword){
        List<Product> products = productService.GetProductsByName(keyword);
        return products;
    }
}
