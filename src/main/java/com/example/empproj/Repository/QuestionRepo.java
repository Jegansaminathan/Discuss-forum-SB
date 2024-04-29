package com.example.empproj.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.empproj.Model.Question;

public interface QuestionRepo extends MongoRepository<Question,String> {

}
