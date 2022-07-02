package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> findAll();

    Optional<User> findById(String id);

    User save(User account);

    void remove(String id);

    List<User> findAllByRole(String role);

}
