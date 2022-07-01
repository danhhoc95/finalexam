package cdw.finalexam.motobikeshop.service;

import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.Entity.CustomUserDetails;
import cdw.finalexam.motobikeshop.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService, UserDetailsService {
    @Autowired
    private IUserRepository iAccountRepository;
    @Override
    public List<User> findAll() {
        return iAccountRepository.findAll();
    }

    @Override
    public Optional<User> findById(String id) {
        return iAccountRepository.findById(id);
    }

    @Override
    public User save(User store) {
        return iAccountRepository.save(store);
    }

    @Override
    public void remove(String id) {
        iAccountRepository.deleteById(id);
    }

    @Override
    public List<User> findAllByRole(String role) {
        return iAccountRepository.getAccountsByRole(role);
    }

    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {
        Optional<User> user = iAccountRepository.findById(phone);
        if (user == null) {
            throw new UsernameNotFoundException(phone);
        }
        return new CustomUserDetails(user.get());
    }
}
