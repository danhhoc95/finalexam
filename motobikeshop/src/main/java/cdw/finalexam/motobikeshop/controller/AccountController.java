package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.Entity.CustomUserDetails;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginRequest;
import cdw.finalexam.motobikeshop.Entity.Payload.LoginResponse;
import cdw.finalexam.motobikeshop.Entity.Payload.Payload;
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

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
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
    public Payload<User> getAllUsers() {
        List<User> users = iUserService.findAll();
        Payload<User> response = new Payload<User>();
        response.setList(users);
        response.setTotalItem(users.size());
        response.setPageSize(6);
        return response;
    }

    @GetMapping(value = { "/users/{role}"})
    public Payload<User> getAllAccountsByRole(@PathVariable("role") String role) {
        List<User> users = iUserService.findAllByRole(role);
        Payload<User> response = new Payload<User>();
        response.setList(users);
        response.setTotalItem(users.size());
        response.setPageSize(6);
        return response;
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
        Optional<User> us = iUserService.findById(user.getPhoneNumber());
        if (!us.isEmpty()) {
            throw new AlreadyExistsException("Account is exists");
        }
        String password = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
        user.setPassword(password);
        return iUserService.save(user);
    }

    @PostMapping("user/exits")
    public boolean UserExits(@RequestBody LoginRequest loginRequest){
        Optional<User> us = iUserService.findById(loginRequest.getPhonenumber());
        if (!us.isEmpty()) {
            return false;
        }else {
            return true;
        }
    }

    @PostMapping("/user/update")
    public User updateAccount(@RequestBody User user) {
        return iUserService.save(user);
    }

    @PostMapping("/user/login")
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
        LoginResponse response = new LoginResponse(jwt);
        Optional<User> user = iUserService.findById(loginRequest.getPhonenumber());
        response.setUserName(user.get().getUserName());
        response.setPermission(user.get().getPermissions());
        response.setPhoneNumber(user.get().getPhoneNumber());
        return response;
    }
}
