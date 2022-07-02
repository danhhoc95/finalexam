package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer>{

    @Query(value = "SELECT * FROM Product WHERE name like %:name%", nativeQuery = true)
    List<Product> GetProductsByName(@Param("name") String name);
}
