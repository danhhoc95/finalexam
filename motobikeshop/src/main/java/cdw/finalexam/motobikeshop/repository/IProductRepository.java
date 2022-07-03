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

    @Query(value = "SELECT * FROM Product WHERE " +
            "price >= :minPrice and price <= :maxPrice and " +
            "height >= :minHeight and height <= :maxHeight and " +
            "(:origin is null or origin = :origin)", nativeQuery = true)
    List<Product> filterData(@Param("minPrice") int minPrice,@Param("maxPrice") int maxPrice,@Param("minHeight") int minHeight,
                             @Param("maxHeight") int maxHeight,  @Param("origin") String origin);


}
