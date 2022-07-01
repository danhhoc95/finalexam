package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.CustomUserDetails;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginRequest;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginResponse;
import cdw.finalexam.motobikeshop.Entity.Payload.RandomStuff;
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
    private IUserService iAccountService;

    @GetMapping(value = { "/user"})
    public List<User> getAllUsers() {
        List<User> users = iAccountService.findAll();
        return users;
    }

    @GetMapping(value = { "/users/{role}"})
    public List<User> getAllAccountsByRole(@PathVariable("role") String role) {
        List<User> users = iAccountService.findAllByRole(role);
        return users;
    }

    @GetMapping("/user/{phone}")
    public Optional<User> getAccountByID(@PathVariable("phone") String phone) {
        Optional<User> user = iAccountService.findById(phone);
        if (user.isEmpty()) {
            throw new NotFoundDataException("Account is not exists");
        }
        return user;
    }

    @PostMapping("/add/user")
    public User addAccount(@RequestBody User user) {
        Optional<User> us = iAccountService.findById(user.getPhoneNumber());
        if (!us.isEmpty()) {
            throw new AlreadyExistsException("Account is exists");
        }
        return iAccountService.save(user);
    }

    @PostMapping("/update/user")
    public User updateAccount(@RequestBody User user) {
        return iAccountService.save(user);
    }

    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        // Xác thực từ username và password.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
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

    // Api /api/random yêu cầu phải xác thực mới có thể request
    @GetMapping("/random")
    public RandomStuff randomStuff(){
        return new RandomStuff("JWT Hợp lệ mới có thể thấy được message này");
    }
}
