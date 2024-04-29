package com.example.empproj.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.empproj.Model.Answer;

public interface AnswerRepo extends MongoRepository<Answer,String> {

}
