package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.CustomUserDetails;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginRequest;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginResponse;
import cdw.finalexam.motobikeshop.Entity.User;
import cdw.finalexam.motobikeshop.exception.AlreadyExistsException;
import cdw.finalexam.motobikeshop.exception.NotFoundDataException;
import cdw.finalexam.motobikeshop.jwt.JwtTokenProvider;
import cdw.finalexam.motobikeshop.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class AccountController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private IUserService iUserService;

    @GetMapping(value = { "/users"})
    public List<User> getAllUsers() {
        List<User> users = iUserService.findAll();
        return users;
    }

    @GetMapping(value = { "/users/{role}"})
    public List<User> getAllAccountsByRole(@PathVariable("role") String role) {
        List<User> users = iUserService.findAllByRole(role);
        return users;
    }

    @GetMapping("/user/{phone}")
    public Optional<User> getAccountByID(@PathVariable("phone") String phone) {
        Optional<User> user = iUserService.findById(phone);
        if (user.isEmpty()) {
            throw new NotFoundDataException("Account is not exists");
        }
        return user;
    }

    @PostMapping("/user/add")
    public User addAccount(@RequestBody User user) {
        Optional<User> us = iUserService.findById(user.getUserName());
        if (!us.isEmpty()) {
            throw new AlreadyExistsException("Account is exists");
        }
        String password = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
        user.setPassword(password);
        return iUserService.save(user);
    }

    @PostMapping("/user/update")
    public User updateAccount(@RequestBody User user) {
        return iUserService.save(user);
    }

    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        // Xác thực từ username và password.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getPhonenumber(),
                        loginRequest.getPassword()
                )
        );
        // Nếu không xảy ra exception tức là thông tin hợp lệ
        // Set thông tin authentication vào Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);
        // Trả về jwt cho người dùng.
        String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        return new LoginResponse(jwt);
    }
}
