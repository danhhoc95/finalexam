package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.CartId;
import cdw.finalexam.motobikeshop.Entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ICartRepository extends JpaRepository<CartItem, CartId>{

    @Query(value = "SELECT * FROM Cart_item WHERE phone = :phone", nativeQuery = true)
    List<CartItem> findByPhone(@Param("phone") String phone);
}
