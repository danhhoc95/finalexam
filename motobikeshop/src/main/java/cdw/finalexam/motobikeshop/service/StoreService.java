package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.Store;
import cdw.finalexam.motobikeshop.repository.IStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService implements  IStoreService{
    @Autowired
    private IStoreRepository iStoreRepository;
    @Override
    public List<Store> findAll() {
        return iStoreRepository.findAll();
    }

    @Override
    public Optional<Store> findById(int id) {
        return iStoreRepository.findById(id);
    }

    @Override
    public Store save(Store store) {
        return iStoreRepository.save(store);
    }

    @Override
    public void remove(int id) {
        iStoreRepository.deleteById(id);
    }
}
