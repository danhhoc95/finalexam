package cdw.finalexam.motobikeshop.Entity.Payload;

import lombok.Data;

@Data
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String phoneNumber;
    private String userName;
    private String permission;

    public LoginResponse(String accessToken){
        this.accessToken = accessToken;
    }
}
