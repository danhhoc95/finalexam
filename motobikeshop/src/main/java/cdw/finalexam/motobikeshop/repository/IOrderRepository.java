package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<ProductOrder, Integer>{

    @Query(value = "SELECT * FROM Order WHERE phone = :phone", nativeQuery = true)
    List<ProductOrder> findByPhone(@Param("phone") String phone);
}
