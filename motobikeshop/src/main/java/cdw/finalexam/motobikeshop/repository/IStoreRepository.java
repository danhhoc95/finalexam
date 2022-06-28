package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStoreRepository extends JpaRepository<Store, Integer>{
}
