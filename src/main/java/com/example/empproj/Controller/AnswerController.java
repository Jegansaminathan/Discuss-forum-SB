package com.example.empproj.Controller;

import java.util.List;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import com.example.empproj.Model.Answer;
import com.example.empproj.Model.Question;
import com.example.empproj.Repository.AnswerRepo;

@RestController
@CrossOrigin(origins = "*")
public class AnswerController {
    @Autowired
    AnswerRepo answerRepo;
    
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter();
    }


    @PostMapping("/addAnswer")
    public void addAnswer(@RequestBody Answer answer) {
        answerRepo.save(answer);
    }
    @GetMapping("/getAnswer")
    public List<Answer> getAllQuestions() {
        return answerRepo.findAll();
    }
}