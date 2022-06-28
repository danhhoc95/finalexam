package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Store;

import java.util.List;
import java.util.Optional;

public interface IStoreService {
    List<Store> findAll();

    Optional<Store> findById(int id);

    Store save(Store store);

    void remove(int id);

}
