package cdw.finalexam.motobikeshop.controller;

import cdw.finalexam.motobikeshop.service.IStoreService;
import cdw.finalexam.motobikeshop.Entity.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class StoreController {

    @Autowired
    private IStoreService storeService;

    @GetMapping(value = { "/stores"})
    public List<Store> getAllStores() {
        List<Store> stores = storeService.findAll();
        return stores;
    }

    @GetMapping("/store/{id}")
    public Optional<Store> getDetailStore(@PathVariable("id") int id) {
        Optional<Store> store = storeService.findById(id);
        return store;
    }

    @GetMapping("/add/store")
    public Store addStore(Store store) {
        return storeService.save(store);
    }

//    @PostMapping("/store/update/updateStore")
//    public String updateStudent(HttpServletRequest request, Model model) throws ParseException {
//        Student student = getStudent(request,model);
//        storeService.save(student);
//        model.addAttribute("students", studentService.findAll());
//        return "redirect:/students";
//    }
//
//    public Student getStudentByID(String id) {
//        return storeService.findById(id).get();
//    }
//
//    public Student getStudent(HttpServletRequest request, Model model) throws ParseException {
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        Student student = new Student();
//        String id = request.getParameter("studentId");
//        String name = request.getParameter("name");
//        boolean male = Boolean.parseBoolean(request.getParameter("male"));
//        String stringBirthday = request.getParameter("birthday");
//        if (!stringBirthday.isEmpty()) {
//            Date birthday = sdf.parse(request.getParameter("birthday"));
//            student.setBirthday(birthday);
//        }
//        String placeOfBirth = request.getParameter("placeOfBirth");
//        String address = request.getParameter("address");
//        String depName = request.getParameter("depName");
//        student.setStudentId(id);
//        student.setName(name);
//        student.setMale(male);
//        student.setPlaceOfBirth(placeOfBirth);
//        student.setAddress(address);
//        student.setDepName(depName);
//        return student;
//    }


}
