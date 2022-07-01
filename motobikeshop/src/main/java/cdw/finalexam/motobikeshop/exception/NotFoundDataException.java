package cdw.finalexam.motobikeshop.exception;

public class NotFoundDataException extends RuntimeException{

    private String message;
    public NotFoundDataException(String message) {
        super(message);
        this.message = message;
    }
    public NotFoundDataException() {
    }
}
