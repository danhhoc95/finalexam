package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Account;

import java.util.List;
import java.util.Optional;

public interface IAccountService {
    List<Account> findAll();

    Optional<Account> findById(String id);

    Account save(Account account);

    void remove(String id);

}
