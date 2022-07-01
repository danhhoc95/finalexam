package cdw.finalexam.motobikeshop.Entity.Payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginRequest {
    @NotBlank
    private String phonenumber;

    @NotBlank
    private String password;
}
