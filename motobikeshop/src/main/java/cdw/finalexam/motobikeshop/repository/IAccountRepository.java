package cdw.finalexam.motobikeshop.repository;

import cdw.finalexam.motobikeshop.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, String>{
}
