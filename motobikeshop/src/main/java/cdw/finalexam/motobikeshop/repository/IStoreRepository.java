package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.Store;
import cdw.finalexam.motobikeshop.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStoreRepository extends JpaRepository<Store, Integer>{

    @Query(value = "SELECT * FROM Product WHERE permissions = :permission", nativeQuery = true)
    List<User> getAccountsByRole(@Param("permission") String permission);
}
