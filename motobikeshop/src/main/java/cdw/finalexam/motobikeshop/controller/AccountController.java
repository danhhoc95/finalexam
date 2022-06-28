package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.Account;
import cdw.finalexam.motobikeshop.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class AccountController {

    @Autowired
    private IAccountService iAccountService;

    @GetMapping(value = { "/accounts"})
    public List<Account> getAllStores() {
        List<Account> accounts = iAccountService.findAll();
        return accounts;
    }

    @GetMapping("/account/{userName}")
    public Optional<Account> getDetailStore(@PathVariable("userName") String userName) {
        Optional<Account> account = iAccountService.findById(userName);
        return account;
    }

    @GetMapping("/add/account")
    public Account addAccount(Account account) {
        return iAccountService.save(account);
    }

}
