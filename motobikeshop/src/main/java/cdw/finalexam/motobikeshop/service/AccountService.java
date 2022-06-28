package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Account;
import cdw.finalexam.motobikeshop.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService implements  IAccountService{
    @Autowired
    private IAccountRepository iAccountRepository;
    @Override
    public List<Account> findAll() {
        return iAccountRepository.findAll();
    }

    @Override
    public Optional<Account> findById(String id) {
        return iAccountRepository.findById(id);
    }

    @Override
    public Account save(Account store) {
        return iAccountRepository.save(store);
    }

    @Override
    public void remove(String id) {
        iAccountRepository.deleteById(id);
    }
}
