package com.example.empproj.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.example.empproj.Model.Question;
import com.example.empproj.Repository.QuestionRepo;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    QuestionRepo questionRepo;

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @PostMapping("/addStudent")
    public void addStudent(@RequestBody Question question) {
        questionRepo.save(question);
    }

    @GetMapping("/getAllQuestions")
    public List<Question> getAllQuestions() {
        return questionRepo.findAll();
    }
}
